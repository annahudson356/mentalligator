import React from 'react';
import './Navbar.css';
const Navbar = ({ setCurrentPage }) => {
  return (
    <nav class="navbar">
      <ul class="nav-links">
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('login')}>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
