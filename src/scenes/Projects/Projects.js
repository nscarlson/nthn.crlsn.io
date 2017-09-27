import { object } from 'prop-types'
import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'

class Projects extends Component {
  static displayName = 'Projects'

  static propTypes = {
    data: object,
  }

  render = () => {
    if (this.props.data.loading) {
      return (<ReactLoading color="black" height={667} type="bars" width={375} />)
    }
    return (
      <div>
        {this.props.data.allProjects.map(({ article, id, image, title, slug }) => (
          <Link className="project" key={id} to={article.slug}>
            <img className="project-thumbnail" src={image} />
          </Link>))}
      </div>
    )
  }
}

export default Projects
