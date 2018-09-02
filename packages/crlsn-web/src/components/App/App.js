import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import About from 'scenes/About'
import Blog from 'scenes/Blog'
import Edit from 'scenes/Edit'
import Home from 'scenes/Home'
import Projects from 'scenes/Projects'

const App = () => (
  <Layout>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} exact path="/about" />
      <Route component={Blog} exact path="/blog" />
      <Route component={Edit} exact path="/edit/:slug" />
      <Route component={Projects} exact path="/projects" />
    </Switch>
  </Layout>
)

App.displayName = 'App'

export default App
