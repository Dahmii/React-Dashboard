import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //authentication
  const handleLogin = async (event) => {
    event.preventDefault();

    // Create the login data object
    const loginData = {
      email,
      password,
    };

    try {
      // Replace 'http://your-backend-api.com/login' with your actual API endpoint
      const response = await fetch("http://your-backend-api.com/login", {
        method: "POST", // Specify POST method for sending data
        headers: { "Content-Type": "application/json" }, // Set content type as JSON
        body: JSON.stringify(loginData), // Convert login data to JSON string for body
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const loginResponse = await response.json(); // Parse the JSON response

      // Handle successful login based on your backend's response format
      if (loginResponse.success) {
        // Assuming the response has a "success" property
        // Store the token (if your backend uses tokens) securely (e.g., using js-cookie)
        localStorage.setItem("token", loginResponse.token); // Example: storing token in localStorage

        // Update user's logged-in state using Context API or Redux
        // (implementation depends on your chosen state management library)

        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(loginResponse.message || "Login failed."); // Use error message from response if available
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
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
        <h1>Welcome!</h1>
        <p>Please log in to continue.</p>
      </div>
    </div>
  );
}

export default login;
