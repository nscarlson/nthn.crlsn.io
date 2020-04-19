import React from 'react'
import Article from '../components/Article'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ARTICLE = gql`
    query getArticle($postId: ID!) {
        postById(postId: $postId) {
            id
            content
            slug
            title
        }
    }
`

const Projects = () => {
    const { data } = useQuery(GET_ARTICLE, {
        variables: { postId: '1234-1234-1234-1234' },
    })

    if (data?.postById) {
        return (
            <Article
                content={data.postById.content}
                id={data.postById.id}
                key={data.postById.id}
                tags={['lorem', 'ipsum', 'dolor']}
                title={data.postById.title}
            />
        )
    }

    return null
}

export default Projects
