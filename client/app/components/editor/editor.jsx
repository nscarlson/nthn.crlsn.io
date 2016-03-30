import React from 'react'
import Marked from 'marked'

export default class editor extends React.Component {

  constructor (props) {
    super(props);

    this.state = {value: 'Type some *markdown* heeeere! '};

    this.onChange.bind(this);
    this.rawMarkup.bind(this);
  }

  onChange() {
    this.setState({value: this.refs.textarea.value});
  }

  rawMarkup() {
    return { __html: Marked(this.state.value, {sanitize: true}) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.onChange.bind(this)}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output Stuff</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.rawMarkup()}
        />
      </div>
    );
  }
}
