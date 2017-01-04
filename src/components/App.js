import React, { Component } from 'react'

import Recruit from './recruit'

class App extends Component {

  render () {
    return <div className='.layout'>
      <div className='header'>
        <h1>Tampa Bay Women's Krewe RFC </h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Calendar</li>
          <li>Scores</li>
          <li>Sponsors</li>
        </ul>
      </nav>
      <Recruit />
      <div className='contact' />
      <div className='calendar' />
      <div className='scores' />
      <div className='sponsorship' />
      <footer>
        <h6>&copy; 2017 Liz Tiller for Tampa Bay Women's Krewe RFC</h6>
      </footer>
    </div>
  }
}

export default App
