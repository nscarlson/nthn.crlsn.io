import { object } from 'prop-types'
import React from 'react'
// import Article from 'components/Article'

// const BlogPosts = [0, 1, 2]

const Blog = ({ data: { article }, match: { params: { id } } }) => (
  <div>
    <p>{ id }</p>
  </div>
)

Blog.displayName = 'Blog'

Blog.propTypes = {
  data: object.isRequired,
  match: object.isRequired,
}

export default Blog
