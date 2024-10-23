import React from 'react';
import './LoginComponent.css';
const LoginComponent = () => {
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
          <input type="password" id="login-password" name="password" required />
        </div>
        <button type="submit">Login</button>
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
          <input type="password" id="register-password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginComponent;
