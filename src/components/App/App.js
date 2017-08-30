import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import About from 'scenes/About'
import Blog from 'scenes/Blog'
import Home from 'scenes/Home'
import Resume from 'scenes/Resume'

class App extends Component {
  static displayName = 'App'

  render = () => (
    <Layout>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Blog} exact path="/blog" />
        <Route component={Resume} exact path="/resume" />
      </Switch>
    </Layout>
  )
}

export default App
