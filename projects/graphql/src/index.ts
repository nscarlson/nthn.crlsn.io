import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { modules } from './modules'

require('dotenv').config()

const { schema } = modules

const init = async () => {
    const apolloServer = new ApolloServer({
        schema,
        context: ({ req, res }: { req: express.Request; res: any }) => ({
            req,
            res,
        }),
        introspection: true,
        playground: {
            settings: {
                'request.credentials': 'include',
            },
        },
    })

    const corsOptions = {
        origin: 'https://nthn.crlsn.io.localhost',
        credentials: true,
    }

    const app = express()

    app.disable('x-powered-by')

    app.use(cookieParser())

    app.use(cors(corsOptions))
    apolloServer.applyMiddleware({
        app,
        cors: corsOptions,
        path: '/',
    })

    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at ${apolloServer.graphqlPath}`)
    })
}

init()
