import { gql } from 'apollo-server'

export default gql`
    type Query {
        postById(postId: ID!): Post
    }

    type Post {
        id: ID!
        slug: String!
        content: String!
    }
`
