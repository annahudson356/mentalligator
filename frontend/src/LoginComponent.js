import React, { useState } from "react";
import axios from "axios";
import "./LoginComponent.css";

const LoginComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!registerEmail || !registerPassword || !name || !confirmPassword) {
      console.error("Email and password are required");
      return;
    }

    const email = registerEmail;
    const password = registerPassword;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    console.log("Registering with email:", email, "and password", password);
    // Sample Register Post Request http://localhost:3000/users/create

    try {
      const res = await axios.post("http://localhost:3000/users/create", {
        name: name,
        email: email,
        password: password,
      });
      console.log(res.data); // Handle the response data
      setRegistered(true);
    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!loginEmail || !loginPassword) {
      console.error("Email and password are required");
      return;
    }

    const email = loginEmail;
    const password = loginPassword;

    console.log("Logging in with email:", email, "and password:", password);
    // Sample Log In Request http://localhost:3000/users/sign-in/johndoe@ufl.edu/password
    const res = await axios
      .get(`http://localhost:3000/users/sign-in/${email}/${password}`, {
        params: { email, password },
      })
      .then((response) => {
        console.log("Login response:", response);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            id="login-email"
            name="email"
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        {loggedIn && <p>Logged in!</p>}
      </form>

      <h2 id="register">Register</h2>
      <form id="registration-form">
        <div className="form-group">
          <label htmlFor="register-name">Name:</label>
          <input
            type="text"
            id="register-name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-email">Email:</label>
          <input
            type="email"
            id="register-email"
            name="email"
            value={registerEmail}
            onChange={(event) => setRegisterEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Password:</label>
          <input
            type="password"
            id="register-password"
            name="password"
            value={registerPassword}
            onChange={(event) => setRegisterPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
        {registered && <p>Registered!</p>}
      </form>
    </div>
  );
};

export default LoginComponent;
