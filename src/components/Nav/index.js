import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
  return <nav>
    <ol>
      <li><NavLink to="/" activeClassName="active">About</NavLink></li>
      <li><a href="resume.pdf" target="_self">Resume</a></li>
    </ol>
  </nav>;
}

export default Nav;
