import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/movies' className='navbar-brand'>SAMFLIX</Link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to='/profile' class="nav-link">Welcome, {props.user.name}!</Link>
      </li>
      <li class="nav-item">
        <Link to='' class="nav-link" onClick={props.handleLogout}>Log Out</Link>
      </li>
    </ul>
  </nav>
  :
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/movies' className='navbar-brand'>SAMFLIX</Link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to='/login' class="nav-link">Log In</Link>
      </li>
      <li class="nav-item">
        <Link to='signup' class="nav-link">Sign Up</Link>
      </li>
    </ul>
  </nav>;
  
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;