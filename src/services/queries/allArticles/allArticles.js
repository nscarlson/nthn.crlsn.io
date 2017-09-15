import { gql } from 'react-apollo'

const allArticles = gql`
  query getArticles {
    allArticles {
      id
      content
    }
  }
`

export default allArticles
