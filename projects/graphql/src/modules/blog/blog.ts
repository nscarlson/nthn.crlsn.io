import { GraphQLModule } from '@graphql-modules/core'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

const platform = new GraphQLModule({
    typeDefs,
    resolvers,
})

export default platform
