import React, { useState } from "react";
import axios from "axios";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("options"); // "options", "login", "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setPopupType("options"); // Reset to welcome screen on close
    setError("");
  };

  // const handleLogin = () => {
    // if (email === "kri@gmail.com" && password === "1234567") {
      // alert("Login Successful!"); 
      // togglePopup();
    // } else {
      // setError("Invalid email or password!");
    // }
  // };

  const handleLogin = async () => {
    try {
      const response = await axios.post("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", { 
        email, 
        password 
      });
  
      if (response.data.success) {
        alert("Login Successful!");
        togglePopup(); // Close popup after login
      } else {
        setError("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };
  
  return (
    <section id="home" className="home">
      {/* Left Side - Image */}
      <div className="home-image">
        <img src="https://img.freepik.com/premium-photo/blue-baby-robot-holding-gift-box-white_888757-23991.jpg" alt="Aesthetic" />
      </div>

      {/* Right Side - Text Content */}
      <div className="home-content">
        <h1>Your Digital Ayurvedic Guide - Personalized at your fingertips!</h1>
        <p>Get instance personalized Ayurvedic guidance - anytime, anywhere!</p>
        <button className="chat-button" onClick={togglePopup}>Chat Now</button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {popupType === "options" && (
              <>
                <h2>Welcome!</h2>
                <p>Choose an option to continue:</p>
                <button className="login-button" onClick={() => setPopupType("login")}>Login</button>
                <button className="signup-button" onClick={() => setPopupType("signup")}>Signup</button>
              </>
            )}

            {popupType === "login" && (
              <>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <input 
                  type="text" 
                  placeholder="Enter Email" 
                  className="auth-container"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                  type="password" 
                  placeholder="Enter Password" 
                  className="auth-container"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button className="auth-button" onClick={handleLogin}>Login</button>
                <p>Don't have an account? <span onClick={() => setPopupType("signup")}>Sign Up</span></p>
              </>
            )}

            {popupType === "signup" && (
              <>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Enter Name" className="auth-container" />
                <input type="text" placeholder="Enter Email" className="auth-container" />
                <input type="password" placeholder="Enter Password" className="auth-container" />
                <button className="auth-button">Sign Up</button>
                <p>Already have an account? <span onClick={() => setPopupType("login")}>Login</span></p>
              </>
            )}

            <button className="close-button" onClick={togglePopup}>X</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
