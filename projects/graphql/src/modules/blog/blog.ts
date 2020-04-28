import { GraphQLModule } from '@graphql-modules/core'

import resolvers from './resolvers'
import typeDefs from './typeDefs'

import S3 from './services/S3'

const blog = new GraphQLModule({
    context: {
        s3: new S3(),
    },
    typeDefs,
    resolvers,
})

export default blog
