import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'
import { HttpLink } from 'apollo-link-http'
import withApollo from 'next-with-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
    ({ initialState }) =>
        new ApolloClient({
            cache: new InMemoryCache().restore(initialState || {}),
            connectToDevTools: process.browser,
            link: ApolloLink.from([
                new HttpLink({
                    fetch,
                    uri: publicRuntimeConfig.GRAPHQL_ENDPOINT, // Server URL (must be absolute)
                }),
                createUploadLink({
                    uri: publicRuntimeConfig.GRAPHQL_ENDPOINT,
                }),
            ]),
        }),
)
