import { node } from 'prop-types'
import React from 'react'

import * as S from './styles'

interface FooterProps {
    children: React.ReactNode
}

const Footer = ({ children }: FooterProps) => (
    <div>&copy;{new Date().getFullYear()} Nathan Carlson</div>
)

export default Footer
