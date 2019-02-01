import React, { Component } from 'react'
import styled from '@emotion/styled'

const StyledAvatar = styled.img`
    border-radius: 50%;
    border-width: 0px;
    height: auto;
    width: 324px;
    position: absolute;
`

const StyledContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

const Index = () => (
    <div className="app">
        <StyledContent>
            <StyledAvatar src="/static/images/avatar.jpg" />
        </StyledContent>
    </div>
)

export default Index
