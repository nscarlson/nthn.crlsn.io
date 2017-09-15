import { object } from 'prop-types'
import React, { Component } from 'react'
import Article from 'components/Article'
import ReactLoading from 'react-loading'

class Blog extends Component {
  static displayName = 'Blog'

  static propTypes = {
    data: object,
  }

  render () {
    if (this.props.data.loading) {
      return (<ReactLoading type="bars" color="black" height="667" width="375" />)
    }
    return (
      <div>
        <p>{'Blog Post'}</p>
        {this.props.data.allArticles.map(({ id, title, content }) => (
          <Article content={content} id={id} key={id} title={title} />
       ))}
      </div>
    )
  }
}

// const Blog = ({ data: { allArticles } }) => {
//   if (this.props.data.loading) {
//     return <div>HI</div>
//   } else {
//     return <div>
//       <p>{'Blog Post'}</p>
//       {allArticles.map(({ id, title, content }) => (
//         <Article content={content} id={id} title={title} />
//       ))}
//     </div>
//   }
// }

export default Blog
