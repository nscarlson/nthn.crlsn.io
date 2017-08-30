import React, { Component } from 'react'

import Marked from 'marked'
import Tag from 'components/Tag'

class Article extends Component {
  displayName = 'Article'

  rawMarkup = (content) => {
    __html: Marked(content, { sanitize: true })
  }

  render = () =>
    <div id="articles-container">
      <div>
        <article>
          <h1>{ 'Article Title' }</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={this.rawMarkup('\n\n-------------\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`.')}
          />
        </article>
      </div>
      <Tag />
    </div>
}

export default Article
