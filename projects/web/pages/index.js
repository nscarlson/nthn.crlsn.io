import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.div`
    img {
        border-radius:50%;

        border-width: 3px;
        border-style: solid;
        border-image: linear-gradient(black, rgba(0, 0, 0, 0)) 1 100%;
    }
`

const Index = () => (
    <StyledAvatar>
        <img src="/static/images/avatar.jpg" />
    </StyledAvatar>
)

export default Index
