import { GraphQLModule } from '@graphql-modules/core'
import blog from './blog'

export const modules: GraphQLModule = new GraphQLModule({
    imports: [blog],
})
