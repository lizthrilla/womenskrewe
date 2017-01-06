import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home' // put in next game
import Contact from './Contact'
import Schedule from './Schedule'
import Location from './Location'
import Join from './Join'
// import Sponsors from './Sponsors'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Schedule' component={Schedule} />
        <Route path='/Locations/:slug' component={Location} />
        <Route path='/Join' component={Join} />
      </Route>
    </Router>
  }
}

export default App
