import { array } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const Projects = ({ projects }) => (
    <div>
        {projects.map(({ article, id, image, title, slug }) => (
            <Link className="project" key={id} to={article.slug}>
                <img className="project-thumbnail" src={image} />
            </Link>))}
    </div>)

Projects.displayName = 'Projects'
Projects.propTypes = {
    projects: array,
}

export default Projects
