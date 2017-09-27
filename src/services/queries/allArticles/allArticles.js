import { gql } from 'react-apollo'

const allArticles = gql`
  query getArticles {
    allArticles {
      id
      content
      title
    }
  }
`

export default allArticles
