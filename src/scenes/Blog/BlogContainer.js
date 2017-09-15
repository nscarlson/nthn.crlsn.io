import { graphql } from 'react-apollo'

import { allArticles } from 'services/queries'

import Blog from './Blog'

const BlogContainer = graphql(allArticles)(Blog)

BlogContainer.displayName = 'BlogContainer'

export default BlogContainer
