// import axios from 'axios'
import { GraphQLModule } from '@graphql-modules/core'
import { SchemaDirectiveVisitor } from 'graphql-tools'
import { gql } from 'apollo-server'

import { retrieveUserByEmail, verifyToken } from '../../clients/FusionAuth'
import { login } from './resolvers/login'
import logout from './resolvers/logout'
import { register } from './resolvers/register'
import AuthDirective from './directives/AuthDirective'

console.log('authdirective:', AuthDirective)

const AuthDirectiveModule = new GraphQLModule({
    name: 'DateDirectiveModule',
    typeDefs: gql`
        directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

        enum Role {
            ADMIN
            USER
            OTHER
        }
    `,
    schemaDirectives: {
        auth: AuthDirective,
    },
    resolvers: {
        DateFormat: {
            LOCAL: 'local',
            ISO: 'iso',
        },
    },
})

const AuthModule = new GraphQLModule({
    name: 'authModule',
    context: async ({ req, res }): Promise<Context> => {
        try {
            // use http-only cookies for authentication
            const { token } = req.cookies

            const verifiedToken = await verifyToken(token)
            const email: string = verifiedToken?.response?.jwt?.email || ''

            const findByEmailResponse = await retrieveUserByEmail(email || '')

            return {
                token: token || null,
                account: findByEmailResponse,
                res,
            }
        } catch (err) {
            return {
                account: undefined,
                token: '',
                res,
            }
        }
    },
    typeDefs: gql`
        type Account {
            email: String
            name: String
            imageUrl: String
        }

        type Query {
            me: Account @auth(requires: OTHER)
            userByEmail(email: String!): Account
            userByToken(token: String!): Account
        }

        type Mutation {
            login(input: LoginInput!): Boolean
            logout: Boolean
            register(input: RegisterAccountInput!): Account
        }

        input LoginInput {
            email: String!
            password: String!
        }

        input RegisterAccountInput {
            email: String!
            name: String!
            password: String!
        }
    `,
    schemaDirectives: {
        auth: AuthDirective,
        authorized: AuthDirective,
        authenticated: AuthDirective,
    },
    resolvers: {
        Query: {
            me: async (root: {}, args: {}, context) => context.account,
            userByEmail: async (root, args) => retrieveUserByEmail(args?.email),
            userByToken: async (root, args) => verifyToken(args?.token),
        },

        Mutation: {
            login,
            logout,
            register,
        },
    },
    imports: [AuthDirectiveModule],
})

const { schema, schemaDirectives } = AuthModule

SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives)

export interface Account {
    email: string
    name: string
    registrations?: {
        applicationId: string
        roles: string[]
    }[]
}

export interface Context {
    token: string
    account: Account | undefined
    res: any
}

export { AuthModule }
