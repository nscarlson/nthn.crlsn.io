import { node } from 'prop-types'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

const Layout = ({ children }) => (
  <div className="layout">
    <Switch>
      <Header />
    </Switch>
    {children}
    <Footer />
    <Modals />
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: node,
}

export default Layout
