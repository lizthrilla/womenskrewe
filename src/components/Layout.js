import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <div className='.layout'>
      <div className='head'>
        <nav className='on off'>
          <ul>
            {/* <li className='toggle'>☰</li> */}
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Board'>Board</Link>
            </li>
            <li><Link to='/Schedule'>Schedule</Link></li>
            {/* <li>
              <Link to='/Contact'>Contact</Link>
            </li> */}
            <li><Link to='/Join'>Join</Link></li>
            <li><Link to='/Sponsors'>Sponsors</Link></li>
          </ul>
        </nav>

        <main>
          {this.props.children}
        </main>
        {/* <footer>
          <h6>&copy; 2017 Liz Tiller for Tampa Bay Women's Krewe RFC</h6>
        </footer> */}
      </div>
    </div>
  }
}

export default Layout
