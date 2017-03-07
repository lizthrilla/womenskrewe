import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

const MAPS_API_KEY = 'AIzaSyCWHSkQlhdezrqy5_-K-AmDENwzvytp_mU'
class Schedule extends Component {

  render () {
    return <section>

      <h2>Schedule</h2>
      <div className='schedulePage'>
        {/* <div className='bigJess'>
          <img src={require('../styles/bigJess.jpg')} />
        </div> */}
        <div className='practiceInfo'>
          {data.locations.map((location, i) => {
            return <section key={i}>
              {location.time.map((period, i) => {
                return <h3 key={i}>
                  Practices are {period.days} from {period.hours}
                </h3>
              })}
              <h3> <Link to={`/locations/${location.slug}`}>{location.name}</Link></h3>
              <div className='googe-maps'>
                <iframe width='400' height='250' frameBorder='0' style={{border: 0}}
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.mapPlaceId}&key=${MAPS_API_KEY}`} allowFullScreen />
              </div>
              <p>{location.address}</p>
            </section>
          })}
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
      </div>
    </section>
  }
}

export default Schedule
