import { graphql, compose } from 'react-apollo'

import { articlesQuery } from 'services/graphql'

import Blog from './Blog'

const BlogContainer = compose(
    graphql(articlesQuery, {
        props: ({ data, ...props }) => ({
            articles: data.allArticles,
            ...props,
        }),
    },
)(Blog)
)

BlogContainer.displayName = 'BlogContainer'

export default BlogContainer
