import React, { Component } from 'react'
import styled from '@emotion/styled'

const Centered = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const StyledAvatar = styled.img`
    border-radius: 50%;
`

const AlignedContent = styled.div``

const Index = () => (
    <div className="app">
        <Centered>
            <StyledAvatar src="/static/images/avatar.jpg" />
        </Centered>
    </div>
)

export default Index
