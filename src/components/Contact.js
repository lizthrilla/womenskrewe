import React, { Component } from 'react'

class Contact extends Component {

  render () {
    return <div className='contact'>
      <h2>Contact Us</h2>
      <section>
        <form>
          <p>
            <label htmlFor='fullName'>Name</label>
            <input name='fullName' type='text' />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input name='email' type='email' />
          </p>
          <p>
            <label htmlFor='message'>Message</label>
            <textarea cols='30' rows='10' />
          </p>
          <p>
            <button type='submit'>Submit</button>
          </p>
        </form>

        <div className='social'>
          <div className='image' />
          <div className='contactButton'>
            <button className='facebook'>
              <a href='https://www.facebook.com/Tampabaywomenskrewerfc/?fref=ts'> <i className='fa fa-facebook' aria-hidden='true' /></a>
            </button>
            <button className='instagram'>
              <a href='https://www.instagram.com/tampabaywomenskrewe/'>
                <i className='fa fa-instagram' aria-hidden='true' /></a>
            </button>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Contact
