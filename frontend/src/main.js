// This is where the main ui will go

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Your Wellness. Simplified</h1>} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
