import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginComponent from './LoginComponent';
import Navbar from './Navbar';
import About from './About'
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Default page

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginComponent />;
      case 'about':
        return <About />;
      case 'contact':
      default:
        return <h1>Mentalligator</h1>; 

    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()} 
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
