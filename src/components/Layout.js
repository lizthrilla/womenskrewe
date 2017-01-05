import React, { Component } from 'react'
import { Link } from 'react-router'

// import Recruit from './recruit'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <div className='.layout'>
      <div className='back'>
        <nav className='on off'>
          <ul>
            {/* <li className='toggle'>☰</li> */}
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>Team</li>
            <li><Link to='/Schedule'>Schedule</Link></li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
            <li>Join</li>
            <li>Sponsors</li>
          </ul>
        </nav>
        {/* <h1>Tampa Bay Krewe</h1>
        <h2> Women's Rugby</h2> */}

        <main>
          {this.props.children}
        </main>

        <footer>
          <h6>&copy; 2017 Liz Tiller for Tampa Bay Women's Krewe RFC</h6>
        </footer>
      </div>
    </div>
  }
}

export default Layout
