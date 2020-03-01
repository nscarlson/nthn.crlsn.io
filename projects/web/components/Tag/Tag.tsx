import React from 'react'
import Link from 'next/link'

import * as S from './styles'

interface TagProps {
    name: string
}

const Tag = ({ name }: TagProps) => (
    <S.Tag>
        <Link href={`/tag/${name}`}>{name}</Link>
    </S.Tag>
)

export default Tag
