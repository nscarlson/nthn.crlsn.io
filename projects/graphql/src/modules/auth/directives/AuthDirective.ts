import { SchemaDirectiveVisitor } from 'apollo-server'
import { defaultFieldResolver } from 'graphql'
import { Context, Account } from '../auth.module'

const { FUSIONAUTH_APPLICATION_ID } = process.env || ''

class AuthDirective extends SchemaDirectiveVisitor {
    hasRole = ({
        account,
        requiredRole,
    }: {
        account: Account
        requiredRole: string
    }) =>
        account?.registrations
            ?.find(
                (registration) =>
                    registration.applicationId === FUSIONAUTH_APPLICATION_ID,
            )
            ?.roles.includes(requiredRole)

    visitObject(type: any) {
        this.ensureFieldsWrapped(type)
        type._requiredAuthRole = this.args.requires
    }
    // Visitor methods for nested types like fields and arguments
    // also receive a details object that provides information about
    // the parent and grandparent types.
    visitFieldDefinition(field: any, details: any) {
        this.ensureFieldsWrapped(details.objectType)
        field._requiredAuthRole = this.args.requires
    }

    ensureFieldsWrapped(objectType: any) {
        // Mark the GraphQLObjectType object to avoid re-wrapping:
        if (objectType._authFieldsWrapped) return
        objectType._authFieldsWrapped = true

        const fields = objectType.getFields()

        Object.keys(fields).forEach((fieldName) => {
            const field = fields[fieldName]
            const { resolve = defaultFieldResolver }: { resolve: any } = field
            field.resolve = async function (
                root: {},
                args: {},
                context: Context,
            ) {
                // Get the required Role from the field first, falling back
                // to the objectType if no Role is required by the field:
                const requiredRole =
                    field._requiredAuthRole || objectType._requiredAuthRole

                if (!requiredRole) {
                    return resolve.apply(this, args)
                }

                const { account } = context
                if (!this.hasRole({ account, requiredRole })) {
                    throw new Error('not authorized')
                }

                return resolve.apply(this, args)
            }
        })
    }
}

export default AuthDirective
