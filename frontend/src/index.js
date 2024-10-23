import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Default page

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />;
      case 'home':
      default:
        return (<Navbar />); 
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
