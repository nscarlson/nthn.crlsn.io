import React from 'react'

import Flex from '../Flex'
import Tag from '../Tag'

import * as S from './styles'

interface ArticleProps {
    content: string
    tags?: string[]
    title: string
}

const Article = ({ content, tags, title }: ArticleProps) => (
    <section>
        <article>
            <S.Title>{title}</S.Title>
            <S.Content dangerouslySetInnerHTML={{ __html: content }} />
        </article>

        <Flex flexWrap="wrap" justifyContent="flex-start">
            {tags?.map((tag, i) => (
                <Tag key={i} name={tag} />
            ))}
        </Flex>
    </section>
)
export default Article
