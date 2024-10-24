import React from 'react';
import './Navbar.css';
const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('login')}>Login</li>
        <li onClick={() => setCurrentPage('about')}>About</li>
        <li onClick={() => setCurrentPage('contact')}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
