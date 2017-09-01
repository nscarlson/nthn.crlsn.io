import marked from 'marked'
import React, { Component } from 'react'

import Tag from 'components/Tag'

class Article extends Component {
  displayName = 'Article'

  getMarkdownText = () => {
    var rawMarkup = marked('This is _Markdown_.', { sanitize: true })
    return { __html: rawMarkup }
  }

  render = () => (
    <div id="articles-container">
      <div>
        <article>
          <h1>{ 'Article Title' }</h1>
          <div dangerouslySetInnerHTML={this.getMarkdownText()} />
        </article>
      </div>
      <Tag />
    </div>
  )
}

export default Article
