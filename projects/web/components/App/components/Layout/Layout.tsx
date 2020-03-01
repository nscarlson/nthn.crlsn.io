import { node } from 'prop-types'
import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

interface Layout {
    children: React.ReactNode
}

const Layout = ({ children }) => (
    <div className="layout">
        <Header />
        {children}
        <Footer />
    </div>
)

Layout.displayName = 'Layout'

Layout.defaultProps = {
    children: [],
}

Layout.propTypes = {
    children: node,
}

export default Layout
