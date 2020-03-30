import styled from '@emotion/styled'

export interface FlexProps {
    justifyContent?: 'center' | 'space-around' | 'space-between' | 'flex-start'
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export const Flex = styled.div`
    height: auto;
    display: flex;
    flex-direction: ${(props: FlexProps) => props.flexDirection || 'row'};
    justify-content: ${(props: FlexProps) =>
        props.justifyContent || 'flex-start'};
    flex-wrap: ${(props: FlexProps) => props.flexWrap || 'wrap'};
`
