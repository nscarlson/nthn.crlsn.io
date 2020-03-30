import React, { ReactNode } from 'react'

import * as S from './styles'

interface FlexProps {
    children?: ReactNode
}

const Flex = ({
    children,
    flexWrap,
    justifyContent,
}: FlexProps & S.FlexProps) => (
    <S.Flex flexWrap={flexWrap} justifyContent={justifyContent}>
        {children}
    </S.Flex>
)

export default Flex
