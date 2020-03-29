import styled from '@emotion/styled'

export const MarkdownEditor = styled.div`
    @import './CodeMirror';

    #editor-flex {
        display: -webkit-flex;
        display: flex;
        height: 100%;
    }

    #in {
        background-color: black;
        height: 100%;
        width: 50%;
        margin: 10px;
        overflow: auto;
    }

    #out {
        height: 100%;
        width: 50%;
        margin: 10px;
        overflow: auto;
    }
`
