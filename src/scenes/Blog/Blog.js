import React from 'react'
import Article from 'components/Article'

const BlogPosts = [0, 1, 2]

const articles = BlogPosts.map((id) =>
  <Article id={id} />
)

const Blog = () => (
  <div>
    {articles}
  </div>
)

Blog.displayName = 'Blog'

export default Blog
