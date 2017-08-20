import { node } from 'prop-types'
import React from 'react'

import Header from './components/Header'

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: node,
}

export default Layout
