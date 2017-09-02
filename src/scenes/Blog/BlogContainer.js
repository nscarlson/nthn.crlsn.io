import { graphql } from 'react-apollo'

import { article } from 'services/queries'

import Blog from './Blog'

const BlogContainer = graphql(article, {
  options: ({ match }) => ({
    variables: match.params,
  }),
})(Blog)

BlogContainer.displayName = 'BlogContainer'

export default BlogContainer
