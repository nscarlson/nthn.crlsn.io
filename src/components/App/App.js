import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import About from 'scenes/About'
import Blog from 'scenes/Blog'
import Home from 'scenes/Home'
import Resume from 'scenes/Resume'

const App = () => (
  <Layout>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} exact path="/about" />
      <Route component={Blog} exact path="/blog" />
      <Route component={Resume} exact path="/resume" />
    </Switch>
  </Layout>
)

App.displayName = 'App'

export default App
