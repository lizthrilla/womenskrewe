import React, { Component } from 'react'

class Profile extends Component {

  static propTypes = {
    image: React.PropTypes.string
  }

  render () {
    return <div className='profile'>
      <img src={this.props.image} />
    </div>
  }
}

export default Profile
