import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Schedule extends Component {

  render () {
    return <section>

      <h2>Schedule</h2>
      <div className='schedulePage'>
        {/* <div className='bigJess'>
          <img src={require('../styles/bigJess.jpg')} />
        </div> */}
      <div className='scheduleText'>
        <div className='practiceInfo'>
          <p>Practices are Tuesday and Thursday 7:30 - 9:30PM during the season in Ybor</p>
          <p>Games are on Saturdays.  Home games are usually at <a href='https://www.google.com/maps/place/Skyview+Park/@27.876854,-82.495575,17z/data=!3m1!4b1!4m5!3m4!1s0x88c2dc9316276cfb:0xe10ca97518d596ef!8m2!3d27.876854!4d-82.495575'>Skyview Park.</a></p>
        </div>
        <div className='schedule'>
          <h3>Spring 2017</h3>
          <table>
            <tbody>
              <tr>
                <th>Feb 4</th>
                <td>Away v Orlando</td>
              </tr>
              <tr>
                <th>Feb 11</th>
                <td>Home v Jax</td>
              </tr>
              <tr>
                <th>Feb 25</th>
                <td>Home v Indian River</td>
              </tr>
              <tr>
                <th>March 25</th>
                <td>Away v Savannah, GA</td>
              </tr>
              <tr>
                <th>April 1</th>
                <td>Away v Indian River</td>
              </tr>
            </tbody>
          </table>
        </div>
        {data.locations.map((location, i) => {
      return <section key={i}>
        <h3><Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
        <p>{location.address}</p>
      </section>
        })}
        </div>
      </div>
    </section>
  }
}

export default Schedule
