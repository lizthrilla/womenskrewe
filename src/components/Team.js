import React, { Component } from 'react'
import board from '../board.js'
// import Profile from './Profile.js'

class Team extends Component {

  render () {
    return <section className='teamPage'>
      <h1>Team</h1>
      <div clasName='teamPhoto'>
        <img src='../kreweTeam.JPG' />
      </div>
      <h1>Board</h1>
      <ul className='board'>
        {board.members.map((member, i) => {
          return <li key={i}>
            <img src={member.image} />
            <div className='imageText'>
              <h5>{member.position} {member.Name}</h5>
            </div>
          </li>
        })}

      </ul>
    </section>
  }
}

export default Team
