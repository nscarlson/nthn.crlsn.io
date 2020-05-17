// import axios from 'axios'
import { GraphQLModule } from '@graphql-modules/core'

import { retrieveUserByEmail, verifyToken } from '../../clients/FusionAuth'

import { login } from './resolvers/login'
import logout from './resolvers/logout'
import { register } from './resolvers/register'
import typeDefs from './typeDefs'

const AuthModule = new GraphQLModule({
    context: async ({ req, res }): Promise<Context> => {
        try {
            // use http-only cookies for authentication
            const { token } = req.cookies

            console.log('token:', token)
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

    typeDefs,

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
})

export interface Context {
    token: string

    account:
        | {
              email: string
              name: string
          }
        | undefined
    res: any
}

export { AuthModule }
