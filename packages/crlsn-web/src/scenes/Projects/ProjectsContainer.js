import { graphql, compose } from 'react-apollo'

import { projectsQuery } from 'services/graphql'

import Projects from './Projects'

const ProjectsContainer = compose(
    graphql(projectsQuery, {
        props: ({ data, ...props }) => ({
            articles: data.allArticles,
            ...props,
        }),
    },
)(Projects)
)

ProjectsContainer.displayName = 'ProjectsContainer'

export default ProjectsContainer
