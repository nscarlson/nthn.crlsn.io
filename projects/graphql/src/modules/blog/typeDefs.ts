import { gql } from 'apollo-server'

export default gql`
    # scalar Upload

    type Query {
        postById(postId: ID!): Post
    }

    type Post {
        id: ID!
        slug: String!
        content: String!
        title: String!
    }

    # type Mutation {
    #     uploadToS3(input: uploadToS3Input!): S3Object!
    # }

    # input uploadToS3Input {
    #     file: Upload!
    # }

    type S3Object {
        id: ID!
    }
`
