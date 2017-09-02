import { ApolloClient, createNetworkInterface } from 'react-apollo'

const apollo = new ApolloClient({
  connectToDevTools: typeof window !== 'undefined',
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj73it8i001gu01144hccdwqo',
  }),
  queryDeduplication: true,
  shouldBatch: true,
})

export default apollo
