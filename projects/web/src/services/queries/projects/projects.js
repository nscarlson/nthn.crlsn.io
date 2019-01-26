import { gql } from 'react-apollo'

const allProjects = gql`
  query getAllProjects {
    allProjects {
      id
      image
      article {
        title
        slug
      }
    }
  }
`
export { allProjects }
