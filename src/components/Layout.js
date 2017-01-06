import React, { Component } from 'react'
import { Link } from 'react-router'

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
            <li><Link to='/Join'>Join</Link></li>
            <li>Sponsors</li>
            <li><a href='https://www.facebook.com/Tampabaywomenskrewerfc/?fref=ts'><i className='fa fa-facebook-official' />
            </a>
            </li>
            <li>
              <a href='https://www.instagram.com/tampabaywomenskrewe/'><i className='fa fa-instagram' aria-hidden='true' />
              </a>
            </li>
          </ul>
        </nav>

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
