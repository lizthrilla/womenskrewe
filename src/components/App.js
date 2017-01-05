import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home' // put in next game
import Contact from './Contact'
import Schedule from './Schedule'
// import Join from './Join'  put Cuscaden map here
// import Sponsors from './Sponsors'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Schedule' component={Schedule} />
      </Route>
    </Router>
  }
}

export default App
