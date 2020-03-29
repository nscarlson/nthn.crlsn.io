import React from 'react'

import Link from 'next/link'
import * as S from './styles'

interface HeaderProps {
    appTitle: string
}

const Header = ({ appTitle }: HeaderProps) => (
    <S.Header>
        <Link href="/">
            <a>{appTitle}</a>
        </Link>
        <ul>
            <Link href="/projects">
                <a>[ Projects ]</a>
            </Link>
        </ul>
        <ul>
            <Link href="/about">
                <a>[ About ]</a>
            </Link>
        </ul>
    </S.Header>
)

export default Header
