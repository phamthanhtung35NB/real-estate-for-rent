import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-image">
        <img src="images/building-image.jpg" alt="Modern building architecture" />
      </div>
      <div className="newsletter-content">
        <h2>Be the first to know</h2>
        <p>Subscribe to our newsletter to receive news and updates.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;