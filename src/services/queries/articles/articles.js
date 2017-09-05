import { gql } from 'react-apollo'

const articles = gql`
  query getArticles {
    allArticles {
      id
      content
    }
  }
`

export default articles
