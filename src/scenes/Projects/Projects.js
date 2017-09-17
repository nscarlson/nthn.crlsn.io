import { object } from 'prop-types'
import React, { Component } from 'react'
import ReactLoading from 'react-loading'

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
        {this.props.data.allProjects.map(({ id, title, image, article }) => (
          <div key={id}>
            <p>{article.title}</p>
            <img className="project-thumbnail" src={image} />
          </div>
       ))}
      </div>
    )
  }
}

export default Projects
