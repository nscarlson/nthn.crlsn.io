import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Marked from 'marked';

class Article extends Component {

    getRandomHex = () => {
        var length = 8;
        var chars = '0123456789ABCDEF';
        var hex = '';
        while(length--) hex += chars[(Math.random() * 16) | 0];
        return hex;
    }

    rawMarkup = (content) => {
        return { __html: Marked(content, {sanitize: true}) };
    }

    render() {
        return (
            <div id='articles-container'>
                <div>
                    <article>
                        <h1>{ 'Article Title' }</h1>
                        <div className='content'
                            dangerouslySetInnerHTML={this.rawMarkup('\n\n-------------\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`.')}>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Article;
