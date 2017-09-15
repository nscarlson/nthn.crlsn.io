import { object } from 'prop-types'
import React from 'react'
import Article from 'components/Article'

// const BlogPosts = [0, 1, 2]

const Blog = ({ data: { allArticles } }) => (
  <div>
    <p>{'Blog Post'}</p>
    {allArticles.map(({ id, title, content }) => (
      <Article id={id} title={title} content={content} />
    ))}
  </div>
)

Blog.displayName = 'Blog'

Blog.propTypes = {
  data: object.isRequired,
}

export default Blog
