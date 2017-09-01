import { gql } from 'react-apollo'

const article = gql`
  query article($id: String) {
    article(_id: $id) {
      _id
      content
      tags
      title
    }
  }
`

export default article
