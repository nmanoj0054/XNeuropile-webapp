import React from 'react'
import './Login.css'

import email_icon from '../Assets/email.png'
import person_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

const Login = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Signup</div>
        <div className='underline'></div>
      </div>
        <div className='inputs'>
          <div className='input'>
            <img src={person_icon} alt='name' className='icon'/>
            <input type='text' placeholder='Username'/>
          </div>
          <div className='input'>
            <img src={email_icon} alt='email' className='icon'/>
            <input type='email' placeholder='Email'/>
          </div>
          <div className='input'>
            <img src={password_icon} alt='password' className='icon'/>
            <input type='password' placeholder='Password'/>
          </div>
        </div>
        <div className="forgot-password"> <span>Forgot Password?</span></div>
        <div className="submit-container">
          <div className="submit">Signup</div>
          <div className="submit">Signup</div>

        </div>
    </div>
  )
}

export default Login