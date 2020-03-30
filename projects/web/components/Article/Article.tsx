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
    children?: ReactNode
    tags?: string[]
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

const Article = ({ children, tags }: ArticleProps) => (
    <>
        <S.Article>{children}</S.Article>
        <Flex flexWrap="wrap" justifyContent="flex-start">
            {tags?.map((tag) => (
                <Tag name={tag} />
            ))}
        </Flex>
    </>
)

export default Article
