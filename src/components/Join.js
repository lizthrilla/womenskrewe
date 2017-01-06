import React, { Component } from 'react'

class Join extends Component {

  render () {
    return <div>
      <h2>Join the Krewe!</h2>
      <div className='join'>
        <p>In order to play, all players must be CIPPed and pay club dues.
      </p>
        <p>Being CIPPed means that you are activiely registered with USA Rugby and, by extention are covered by their supplemental insurance policy in the event you are injured. To register, follow the instructions <a href='https://webpoint.usarugby.org/wp/Memberships/Join.wp'> here</a>  If you have any questions please <a href='mailto:tampabaywomenskrewe@gmail.com'>email us</a>.
        </p>
        <p>The current dues assessment for active players is $50.  This amount will be prorated for new players throughout the season.</p>
        <p>Dues can be paid in cash, by check or money order made out to Tampa Bay Women's Krewe RFC, or via PayPal.</p>
      </div>
      <div className='buttons'>
        <button name='getCipped'>
          <a href='https://webpoint.usarugby.org/wp/Memberships/Join.wp'> GET CIPPED </a>
        </button>
        <button name='payPal'>
          <a href='https://www.paypal.me/tampabaywomensrugby'> PAY DUES</a>
        </button>
      </div>
    </div>
  }
}

export default Join
