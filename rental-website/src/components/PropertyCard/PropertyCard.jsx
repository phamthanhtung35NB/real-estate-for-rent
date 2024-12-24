import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ image, title, price }) => (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={title} />
      </div>
      <div className="property-info">
        <h3>{title}</h3>
        <p className="price">${price.toLocaleString()}</p>
        <button className="btn">View Details</button>
      </div>
    </div>
);

export default PropertyCard;