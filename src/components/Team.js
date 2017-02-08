import React, { Component } from 'react'
import board from '../board.js'

class Team extends Component {

  render () {
    return <section>
      <h1>Team and Board</h1>
      <ul className='board'>
        {board.members.map((member, i) => {
          return <li key={i}>
            <img src={member.image} />
            <div className='imageText'>
              <h4>{member.title}</h4>
              <p>{member.description}</p>
            </div>
          </li>
        })}

      </ul>
    </section>
  }
}

export default Team
