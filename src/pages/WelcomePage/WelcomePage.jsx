import React from 'react';
import { Link } from 'react-router-dom'
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className='welcome'>
      <h1>SAMFLIX</h1>
      <h1>See what's next.</h1>
      <h4>WATCH ANYWHERE. CANCEL ANYTIME.</h4>
      <p><Link to='/signup'>First time using Samflix? Signup!</Link></p>
      <p><Link to='/login'>Already a member? Login!</Link></p>
    </div>
  )
}

export default WelcomePage;