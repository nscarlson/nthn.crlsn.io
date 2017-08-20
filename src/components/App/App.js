import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import About from 'scenes/About'
import Home from 'scenes/Home'

class App extends Component {
  static displayName = 'App'

  render = () => (
    <Layout>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
      </Switch>
    </Layout>
  )
}

export default App
