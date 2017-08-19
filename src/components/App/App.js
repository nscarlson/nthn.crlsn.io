import { node } from 'prop-types'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'

import About from 'scenes/About'
import Explore from 'scenes/Explore'
import Feedback from 'scenes/Feedback'
import Home from 'scenes/Home'
import List from 'scenes/List'
import ListEdit from 'scenes/ListEdit'
import Notifications from 'scenes/Notifications'
import Privacy from 'scenes/Privacy'
import Profile from 'scenes/Profile'

class App extends Component {
  static displayName = 'App'

  static propTypes = {
    children: node,
  }

  render = () => (
    <Layout>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={Book} path="/books/:isbn(\d+-\d+|\d+)-:slug?" />
        <Route component={Collection} path="/collections/:id-:slug" />
        <Route component={Explore} path="/explore" />
        <Route component={Feedback} exact path="/feedback" />
        <Route component={Home} exact path="/" />
        <Route component={ListEdit} path="/lists/:id-:slug/edit" />
        <Route component={ListEdit} path="/lists/:id/edit" />
        <Route component={List} path="/lists/:id-:slug" />
        <Route component={Notifications} exact path="/notifications" />
        <Route component={Privacy} exact path="/privacy" />
        <Route component={Profile} path="/users/:username" />
        <Route component={Search} path="/search" />
        <Route component={Terms} exact path="/terms" />
      </Switch>
    </Layout>
  )
}

export default App
