import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/login.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    // Mock signup (replace with actual logic)
    if (email && password) {
      // Here, replace this with your backend API request
      navigate("/dashboard"); // Redirect to dashboard or welcome page
    } else {
      setError("Invalid signup information. Please check your details.");
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
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
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
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="inputBx">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign Up" />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="links">
                <p>Already have an account?</p>
                <a href="/login">Log In</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="login-info">
        <h1>Join In</h1>
        <p>Be a part of our Innovation</p>
      </div>
    </div>
  );
}

export default Signup;
