import { ApolloClient, createNetworkInterface } from 'react-apollo'

import { API1_HOST } from 'liiist-config'

const apollo = new ApolloClient({
  connectToDevTools: typeof window !== 'undefined',
  networkInterface: createNetworkInterface({
    uri: `${API1_HOST}/graphql`,
  }),
  queryDeduplication: true,
  shouldBatch: true,
})

export default apollo
