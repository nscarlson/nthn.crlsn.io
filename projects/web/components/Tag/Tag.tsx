import React from 'react'
import Link from 'next/link'

import * as S from './styles'

interface TagProps {
    name: string
}

const Tag = ({ name }: TagProps) => (
    <Link href={`/tag/${name}`} passHref>
        <S.Tag>{name}</S.Tag>
    </Link>
)

export default Tag
