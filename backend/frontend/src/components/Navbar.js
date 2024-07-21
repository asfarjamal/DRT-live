// src/components/Navbar.js
import React from 'react';
import logo from '../images/drt_logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/" className="brand">
            <img src={logo} alt="DRT Logo" className="logo" />
          </Link>
        </li>
        <li><Link to="/" className='n1'>Home</Link></li>
        <li><Link to="/about" className='n1'>About</Link></li>
        <li><Link to="/gallery" className='n1'>Gallery</Link></li>
        <li><Link to="/sponsor" className='n1'>Sponsor Us</Link></li>
        <li><Link to="/news" className='n1'>Drift in News</Link></li>
        <li><Link to="/induction" className='n1'>Induction</Link></li>
        <li><Link to="/team" className='n1'>Team</Link></li>
        <li><Link to="/contact" className='n1'>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
