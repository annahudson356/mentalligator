import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="logo">Mentalligator</div>
        <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Log In</a></li>
        <li><a href="#services">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
  );
};

export default Navbar;
