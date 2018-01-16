import React from 'react';
import {Link} from 'react-router-dom';
// import { Navbar, NavItem, Nav } from 'react-bootstrap'
import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <p>Created by Sam Tagert.</p>
      <p>Thank you for using Samflix.</p>
      <p>samtagert@gmail.com</p>
      <p><a className="footer-link" href="www.samtagert.com">Portfolio</a></p>
      <p><a className="footer-link" href="https://www.linkedin.com/in/samtagert/">Linkedin</a></p>
      <p><a className="footer-link" href="https://github.com/samtagert">Github</a></p>
    </div>
  );
};

export default Footer;