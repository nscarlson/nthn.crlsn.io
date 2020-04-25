import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Article from '../components/Article'

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

const Index = () => {
    const { data, loading } = useQuery(GET_ARTICLE, {
        variables: { postId: '1234-1234-1234-1234' },
    })

    if (loading) {
        return <div>LOADING</div>
    }

    if (data?.postById) {
        return (
            <Article
                content={data.postById.content}
                key={data.postById.id}
                tags={['lorem', 'ipsum', 'dolor']}
                title={data.postById.title}
            />
        )
    }

    return null
}

export default Index
