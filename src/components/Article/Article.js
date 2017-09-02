import marked from 'marked'
import React from 'react'

import Tag from 'components/Tag'

const getMarkdownText = () => {
  var rawMarkup = marked('This is _Markdown_.', { sanitize: true })
  return { __html: rawMarkup }
}

const Article = () => (
  <section className="article">
    <div>
      <article>
        <h1>{ 'Article Title' }</h1>
        <div dangerouslySetInnerHTML={getMarkdownText()} />
      </article>
    </div>
    <Tag />
  </section>
 )

Article.displayName = 'Article'

export default Article
