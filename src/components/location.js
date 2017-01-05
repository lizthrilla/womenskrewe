import React, { Component } from 'react'
import data from '../data.json'

// Get my own KEY
const MAPS_API_KEY = 'AIzaSyAkeozOoNOVZFX-uG2Wgv4r0a5-_Q7i8y0'

class Location extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  render () {
    const location = data.locations.find(l => l.slug === this.props.params.slug)

    return <div>
      <h2>{location.name}</h2>
      <div className='googe-maps'>
        <iframe width='600' height='450' frameBorder='0' style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.mapPlaceID}&key=${MAPS_API_KEY}`} allowFullScreen />
      </div>
      <p>{location.address}</p>
      <table>
        <tbody>
          {location.hours.map((period, i) => {
            return <tr key={i}>
              <th>{period.days}</th>
              <td>{period.hours}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }
}

export default Location
