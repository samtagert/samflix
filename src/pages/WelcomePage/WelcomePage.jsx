import React from 'react';
import { Link } from 'react-router-dom'
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className='welcome'>
      <h1 className="welcome-title">SAMFLIX</h1>
      <h1 className="welcome-info">See what's next.</h1>
      <p><Link className="nav-item welcome-info" to='/signup'>First time using Samflix? Sign up!</Link></p>
      <p><Link className="nav-item welcome-info" to='/login'>Already a member? Log in!</Link></p>
    </div>
  )
}

export default WelcomePage;