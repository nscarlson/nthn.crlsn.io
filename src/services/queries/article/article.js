import { gql } from 'react-apollo'

const article = gql`
  query article($id: ID!) {
    article(id: $id) {
      id
      content
      tags
      title
    }
  }
`

export default article
