import React, { Component } from 'react'

class App extends Component {

  render () {
    return <div className='root'>
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
      <div className='recruit'>
        <h2>Now Recruiting!</h2>
        <p> Practices are Tuesday and Thursday 7:30 - 9:30 PM at Cuscaden Park in Ybor. </p>
        <div className='practice' />
      </div>
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
