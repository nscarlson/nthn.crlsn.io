import { GraphQLModule } from '@graphql-modules/core'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

const blog = new GraphQLModule({
    typeDefs,
    resolvers,
})

export default blog
