import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/login.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Authentication
  const handleSignup = async (event) => {
    event.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    // Create the signup data object
    const signupData = {
      email,
      password,
    };

    try {
      // Replace 'http://your-backend-api.com/signup' with your actual API endpoint
      const response = await fetch("http://your-backend-api.com/signup", {
        method: "POST", // Specify POST method for sending data
        headers: { "Content-Type": "application/json" }, // Set content type as JSON
        body: JSON.stringify(signupData), // Convert signup data to JSON string for body
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please check your information.");
      }

      const signupResponse = await response.json(); // Parse the JSON response

      // Handle successful signup based on your backend's response format
      if (signupResponse.success) {
        navigate("/dashboard"); // Redirect to dashboard or welcome page
      } else {
        setError(signupResponse.message || "Signup failed."); // Use error message from response if available
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("An error occurred. Please try again later.");
    }

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
        <h1>Sign up Now!</h1>
        <p>Innovate with Us</p>
      </div>
    </div>
  );
}

export default Signup;
