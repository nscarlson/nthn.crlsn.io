import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps ) => (
    <div className="layout">
        <Header />
        {props.children}
        <Footer />
    </div>
)

Layout.defaultProps = {
    children: [],
}


export default Layout
