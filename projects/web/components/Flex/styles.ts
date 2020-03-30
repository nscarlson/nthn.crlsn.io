import styled from '@emotion/styled'

export interface FlexProps {
    justifyContent: 'center' | 'space-around' | 'space-between' | 'flex-start'
}

export const Flex = styled.div`
    display: flex;
    justify-content: ${(props: FlexProps) => props.justifyContent};
`
