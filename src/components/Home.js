import React, { Component } from 'react'

// import Recruit from './recruit'

class Home extends Component {

  render () {
    return <div className='about'>
      <div className='tampa'>
        <h1>Tampa Bay Krewe Women's Rugby</h1>
      </div>
      <div className='teamPhoto'>
        <img src='./src/kreweTeam.JPG' />
      </div>
      <div className='info'>
        <p> The Tampa Bay Krewe Women's RFC is a club comprised of women living in the Greater Tampa Bay Area. We are women of every shape, size, color and age. We come from all over the United States. Diverse in almost every possible way, there is one thing that bonds us together: our love and dedication to the sport of rugby. </p>

        <p>Our goal is to continue the outreach and the growth of women's rugby in Florida, all while bringing together and empowering women. We welcome anyone and everyone, regardless of experience or skill level. Help us reach our goals, come join us!</p>
      </div>
      <div className='buttons'>
        <button className='facebook'>
          <a href='https://www.facebook.com/Tampabaywomenskrewerfc/?fref=ts'> <i className='fa fa-facebook' aria-hidden='true' /></a>
        </button>
        <button className='instagram'>
          <a href='https://www.instagram.com/tampabaywomenskrewe/'>
            <i className='fa fa-instagram' aria-hidden='true' /></a>
        </button>
        <button>
          <a href='mailto:tampabaywomenskrewe.gmail.com'>
            <i className='fa fa-envelope-o' aria-hidden='true' />
          </a>
        </button>
      </div>
    </div>
  }
}

export default Home
