import { gql } from 'react-apollo'

const bookSearch = gql`
  query bookSearch($search: String) {
    books(title:$search) {
      _id
      author
      isbn10
      isbn13
      title
    }
  }
`

export default bookSearch
