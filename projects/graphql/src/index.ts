import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { modules } from './modules'

const { schema } = modules

const apolloConfig = {
    schema,
    context: ({ req }: { req: object }) => ({ req }),
    introspection: true,
    playground: true,
}

const init = async () => {
    new ApolloServer(apolloConfig).listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    })
}

init()
