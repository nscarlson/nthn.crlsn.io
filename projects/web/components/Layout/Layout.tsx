import React from 'react'

import Header from './components/Header'

import * as S from './styles'

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
    <S.Layout>
        <Header appTitle="{} nthn.crlsn.io" />
        <S.Content>{children}</S.Content>
    </S.Layout>
)

export default Layout
