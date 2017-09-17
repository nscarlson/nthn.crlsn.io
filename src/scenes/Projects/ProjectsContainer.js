import { graphql } from 'react-apollo'

import { allProjects } from 'services/queries/projects'

import Projects from './Projects'

const ProjectsContainer = graphql(allProjects)(Projects)

ProjectsContainer.displayName = 'ProjectsContainer'

export default ProjectsContainer
