// import marked from 'marked'
import React, { ReactNode } from 'react'

import Flex from '../Flex'
import Tag from '../Tag'

import * as S from './styles'

// const getAscii = (b64: string) => Buffer.from(b64, 'base64').toString()

// const getMarkdownText = (md: string) => {
//     const rawMarkup = marked(md, { sanitize: true })
//     return { __html: rawMarkup }
// }

interface ArticleProps {
    content: string
    id: string
    tags?: string[]
    title: string
}

// const Article = ({ content }: ArticleProps) => (
//     <section className="article">
//         <div>
//             <article>
//                 <div
//                     // eslint-disable-next-line react/no-danger
//                     dangerouslySetInnerHTML={getMarkdownText(getAscii(content))}
//                 />
//             </article>
//         </div>
//         <Tag name="tag" />
//     </section>
// )

const Article = ({ id, content, tags, title }: ArticleProps) => (
    <section>
        <article>
            <S.Title>{title}</S.Title>
            <S.Content dangerouslySetInnerHTML={{ __html: content || '' }} />
        </article>

        <Flex flexWrap="wrap" justifyContent="flex-start">
            {tags?.map((tag, i) => (
                <Tag key={i} name={tag} />
            ))}
        </Flex>
    </section>
)

export default Article
