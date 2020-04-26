import styled from '@emotion/styled'

export const Content = styled.div`
    line-height: 2em;
    font-size: 10pt;

    p {
        margin-bottom: 2em;
        font-size: 10pt;
        text-align: justify;
    }

    blockquote {
        border-left: 5px solid grey;
        font-style: italic;

        padding-left: 10px;
    }

    pre {
        border-radius: 4px;
        padding: 20px;

        background-color: lightgray;
        code {
        }
    }

    h1 {
        text-align: center;
        font-family: 'Montserrat', monospace;
    }
`

export const Title = styled.h1`
    text-align: center;
`
