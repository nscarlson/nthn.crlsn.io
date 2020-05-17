import { GraphQLModule } from '@graphql-modules/core'
import blog from './blog'
import { AuthModule } from './auth'

export const modules: GraphQLModule = new GraphQLModule({
    imports: [AuthModule, blog],
})
