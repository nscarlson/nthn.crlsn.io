import React, { Component } from 'react'

import Article from 'components/Article'

let CodeMirror
let Highlight

class MarkdownEditor extends Component {
  displayName = 'MarkdownEditor'

  constructor (props) {
    super(props)
    this.state = { isMounted: false, text: `# (GitHub-Flavored) Markdown Editor

Basic useful feature list:

 * Ctrl+S / Cmd+S to save the file
 * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML
 * Drag and drop a file into here to load it
 * File contents are saved in the URL so you can share files


I'm no good at writing sample / filler text, so go write something yourself.

Look, a list!

 * foo
 * bar
 * baz

And here's some code! :+1:

\`\`\`javascript
$(function(){
  $('div').html('I am a div.');
});
\`\`\`

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.


Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which
the inspiration to this, and some handy implementation hints, came.

### Stuff used to make this:

 * [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing
 * [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
 * [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
 * [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs`,
    }
  }

  componentDidMount () {
    this.setState({ isMounted: true })
    CodeMirror = require('react-codemirror')
    Highlight = require('services/Highlight').default
  }

  handleUpdateText = (text) => {
    this.setState({ text: text })
    console.log(this.state.text)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render = () => {
    if (CodeMirror && Highlight) {
      return (
        <div>
          <div id="in">
            <CodeMirror onChange={this.handleUpdateText} preserveScrollPosition={false} value={this.state.text} />
          </div>
          <div id="out">

            <Article ascii content={this.state.text} title="test" />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default MarkdownEditor
