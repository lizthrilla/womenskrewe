import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Schedule extends Component {

  render () {
    return <div>
      <h2>Schedule</h2>
      <div className='practiceInfo'>
        <p>Practices are Tuesday and Thursday 7:30 - 9:30PM during the season in Ybor</p>
        <p>Games are on Saturdays.  Home games are at Skyview Park.</p>
      </div>
      {/* <div className='schedule'>
        <h2>Spring 2017</h2>
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
              <th>Feb 4</th>
              <td>Away v Indian River</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {data.locations.map((location, i) => {
        return <section key={i}>
          <h3><Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
          <p>{location.address}</p>
        </section>
      })}
    </div>
  }
}

export default Schedule
