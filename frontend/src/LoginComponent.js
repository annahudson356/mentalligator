import React, { useState } from 'react';
import './LoginComponent.css';

const LoginComponent = () => {
  // password visibilty toggle states
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const toggleLoginPasswordVisibility = () => {
    setShowLoginPassword((prev) => !prev);
  };

  const toggleRegisterPasswordVisibility = () => {
    setShowRegisterPassword((prev) => !prev);
  };

  return (
    <div>
      <h2>Login</h2>
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="login-email">Email:</label>
          <input type="email" id="login-email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password:</label>
          <div className="password-container">
            <input 
              type={showLoginPassword ? "text" : "password"} 
              id="login-password" 
              name="password" 
              required 
            />
            <button type="button" onClick={toggleLoginPasswordVisibility}>
              {showLoginPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>

      <h2 id="register">Register</h2>
      <form id="registration-form">
        <div className="form-group">
          <label htmlFor="register-name">Name:</label>
          <input type="text" id="register-name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="register-email">Email:</label>
          <input type="email" id="register-email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Password:</label>
          <div className="password-container">
            <input 
              type={showRegisterPassword ? "text" : "password"} 
              id="register-password" 
              name="password" 
              required 
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <div className="password-container">
            <input 
              type={showRegisterPassword ? "text" : "password"} 
              id="confirm-password" 
              name="confirm-password" 
              required 
            />
            <button type="button" onClick={toggleRegisterPasswordVisibility}>
              {showRegisterPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default LoginComponent;
