import React from 'react';
import './Testimonial.css';

const Testimonial = () => (
    <div className="testimonial">
      <h2>Our Clients Say</h2>
      <div className="testimonial-content">
        <div className="testimonial-image">
          <img src="/api/placeholder/400/400" alt="Client" />
        </div>
        <div className="testimonial-quote">
          <p>"Home4U provides an excellent experience of discovering my new ideal rental property. I really satisfied when I used your products and service."</p>
          <div className="testimonial-author">
            <span className="author-name">Robert Ross</span>
            <span className="author-title">Product Designer</span>
          </div>
        </div>
      </div>
    </div>
);

export default Testimonial;