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
  </header>;
}

export default Header;
