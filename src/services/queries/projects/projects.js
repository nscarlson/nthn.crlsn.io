import { gql } from 'react-apollo'

const allProjects = gql`
    query getAllProjects {
        allProjects {
            id
            image
            article {
                title
            }
        }
    }
`
export { allProjects }
