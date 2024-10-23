import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginComponent from './LoginComponent';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Default page

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginComponent />;
      case 'about':
      case 'contact':
      case 'home':
        return <h1>Mentalligator</h1>; // Render home content
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()} {/* Render the current page below the navbar */}
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
