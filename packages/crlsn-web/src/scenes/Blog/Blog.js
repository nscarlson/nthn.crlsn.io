import { array } from 'prop-types'
import React from 'react'
import Article from 'components/Article'

const Blog = ({ articles }) => (
    <div>
        {articles.map(({ id, content, title }) => (
            <div key={id}>
                <p>{title}</p>
                <Article content={content} id={id} />
            </div>
       ))}
    </div>
)

Blog.propTypes = {
    articles: array,
}

Blog.displayName = 'Blog'

export default Blog
