import { gql } from 'apollo-server'

export default gql`
    type Account {
        email: String
        name: String
        imageUrl: String
    }

    type Query {
        me: Account
        userByEmail(email: String!): Account
        userByToken(token: String!): Account
    }

    type Mutation {
        login(input: LoginInput!): Boolean
        logout: Boolean
        register(input: RegisterAccountInput!): Account
    }

    input LoginInput {
        email: String!
        password: String!
    }

    input RegisterAccountInput {
        email: String!
        name: String!
        password: String!
    }
`
