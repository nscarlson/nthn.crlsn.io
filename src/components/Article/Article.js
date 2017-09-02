import marked from 'marked'
import React from 'react'

import Tag from 'components/Tag'

const getAscii = (b64) => Buffer.from(b64, 'base64').toString()

const getMarkdownText = (md) => {
  var rawMarkup = marked(md, { sanitize: true })
  return { __html: rawMarkup }
}

const Article = () => (
  <section className="article">
    <div>
      <article>
        <h1>{ 'Article Title' }</h1>
        <div dangerouslySetInnerHTML={getMarkdownText(getAscii('SGVsbG8gV29ybGQ='))} />
      </article>
    </div>
    <Tag name="tag" />
  </section>
 )

Article.displayName = 'Article'

export default Article
