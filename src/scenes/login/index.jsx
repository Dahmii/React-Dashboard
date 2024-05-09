import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === "user@example.com" && password === "password123") {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="inputBx">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="inputBx">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="inputBx">
                <input type="submit" value="Log In" />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="links">
                <p>Forgot Password?</p>
                <a href="/signup">Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="login-info">
        <h1>Welcome Back!</h1>
        <p>Please log in to continue.</p>
      </div>
    </div>
  );
}

export default login;
