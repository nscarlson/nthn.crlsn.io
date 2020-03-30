import React, { ReactNode } from 'react'

import Flex from '../../components/Flex'
import Header from './components/Header'

import * as S from './styles'

interface LayoutProps {
    children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
    <S.Layout>
        <Flex justifyContent="center">
            <Header appTitle="{} nthn.crlsn.io" />
        </Flex>

        <Flex justifyContent="center">
            <S.Content>{children}</S.Content>
        </Flex>
    </S.Layout>
)

export default Layout
