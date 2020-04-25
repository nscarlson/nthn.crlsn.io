import marked from 'marked'
import React, { ReactNode } from 'react'

import Flex from '../Flex'
import Tag from '../Tag'

import * as S from './styles'

const parseMarkdown = (markdown: string) => {
    const rawMarkup = marked(markdown)

    return { __html: rawMarkup }
}

interface ArticleProps {
    content: string
    tags?: string[]
    title: string
}

const Article = ({ content, tags, title }: ArticleProps) => (
    <section>
        <article>
            <S.Title>{title}</S.Title>
            <S.Content dangerouslySetInnerHTML={parseMarkdown(content)} />
        </article>

        <Flex flexWrap="wrap" justifyContent="flex-start">
            {tags?.map((tag, i) => (
                <Tag key={i} name={tag} />
            ))}
        </Flex>
    </section>
)
export default Article
