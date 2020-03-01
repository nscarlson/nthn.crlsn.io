import marked from 'marked'
import React from 'react'

import Tag from '../Tag'

const getAscii = (b64: string) => Buffer.from(b64, 'base64').toString()

const getMarkdownText = (md: string) => {
    const rawMarkup = marked(md, { sanitize: true })
    return { __html: rawMarkup }
}

interface ArticleProps {
    content: string
}

const Article = ({ content }: ArticleProps) => (
    <section className="article">
        <div>
            <article>
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={getMarkdownText(getAscii(content))}
                />
            </article>
        </div>
        <Tag name="tag" />
    </section>
)

export default Article
