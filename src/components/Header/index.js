import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';
import Nav from '../Nav';

function Header(props) {
  return <header>
    <Link to="/">
      <img src={logo} alt="ACPM" />
    </Link>
    <Nav></Nav>
    <h3>
      <small>From the desk of Andrew M<sup>c</sup>Watters</small>
    </h3>
  </header>;
}

export default Header;
