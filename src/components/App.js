import React, { Component } from 'react'

class App extends Component {

  render () {
    return <div>
      <h1>Tampa Bay Women's Krewe RFC </h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Calendar</li>
          <li>Scores</li>
          <li>Sponsors</li>
        </ul>
      </nav>
      <div className='recruit' />
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
