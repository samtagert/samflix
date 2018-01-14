import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <Navbar>
    <Navbar.Header>
			<Navbar.Brand>
        <Link to='/movies'>SAMFLIX</Link>
			</Navbar.Brand>
		</Navbar.Header>
    <Nav>
      <NavItem>
        <Link to='/profile'>Welcome, {props.user.name}!</Link>
      </NavItem>
      <NavItem>
        <Link to='' onClick={props.handleLogout}>Log Out</Link>
      </NavItem>
    </Nav>
  </Navbar>
  :
  <Navbar>
    <Navbar.Header>
			<Navbar.Brand>
        <Link to='/movies'>SAMFLIX</Link>
			</Navbar.Brand>
		</Navbar.Header>
    <Nav>
      <NavItem>
        <Link to='/login'>Log In</Link>      
      </NavItem>
      <NavItem>
        <Link to='signup'>Sign Up</Link>      
      </NavItem>
    </Nav>
  </Navbar>;
  
  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;