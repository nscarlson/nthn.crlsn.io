import React, { ReactNode } from 'react'

import * as S from './styles'

interface FlexProps {
    children?: ReactNode
}

const Flex = ({ children, justifyContent }: FlexProps & S.FlexProps) => (
    <S.Flex justifyContent={justifyContent}>{children}</S.Flex>
)

export default Flex
