import React from "react";
import "./styles.css"; // Import CSS file

const AboutUsPage = () => {
  return (
    <div className="container">
      <h1 className="title">About ChatterBox</h1>
      <p className="text">ChatterBox is a real-time chat application.</p>

      <div className="card">
        <h2>🚀 Instant Messaging</h2>
        <p>Chat with your friends in real time without delays.</p>
      </div>

      <div className="card">
        <h2>🔒 Secure & Encrypted</h2>
        <p>Your messages are protected with end-to-end encryption.</p>
      </div>

      <div className="card">
        <h2>📷 Media Sharing</h2>
        <p>Send images, videos, and documents instantly.</p>
      </div>
    </div>
  );
};

export default AboutUsPage;