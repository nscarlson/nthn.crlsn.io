import React from 'react'

import Link from 'next/link'
import * as S from './styles'

interface HeaderProps {
    appTitle: string
}

const Header = ({ appTitle }: HeaderProps) => (
    <S.Header>
        <Link href="/">{appTitle}</Link>
        <ul>
            <Link href="/projects">[ Projects ]</Link>
        </ul>
        <ul>
            <Link href="/about">[ About ]</Link>
        </ul>
    </S.Header>
)

export default Header
