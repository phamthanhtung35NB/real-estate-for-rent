import React from 'react';
import './OnlineBooking.css';
import Header from "../../components/Header/Header";

const properties = [
  {
    id: 1,
    image: '/house1.jpg',
    type: 'House',
    size: 250,
    hours: 5,
    price: 40000000,
    action: 'Request to Book'
  },
  {
    id: 2,
    image: '/house2.jpg',
    type: 'House',
    size: 250,
    hours: 5,
    price: 40000000,
    action: 'View Details'
  },
  {
    id: 3,
    image: '/house3.jpg',
    type: 'House',
    size: 150,
    hours: 5,
    price: 40000000,
    action: 'View Details'
  },
  {
    id: 4,
    image: '/house4.jpg',
    type: 'House',
    size: 50,
    hours: 5,
    price: 30000000,
    action: 'View Details'
  },
  {
    id: 5,
    image: '/apartment1.jpg',
    type: 'Apartment',
    size: 50,
    hours: 5,
    price: 14000000,
    action: 'View Details'
  },
  {
    id: 6,
    image: '/apartment2.jpg',
    type: 'Apartment',
    size: 50,
    hours: 5,
    price: 16000000,
    action: 'View Details'
  }
];

const PropertyCard = ({ image, type, size, hours, price, action }) => (
  <div className="property-card">
    <img src={image} alt={`${type} ${size}sqm`} className="property-image" />
    <div className="property-info">
      <h3>{`${type} ≥ ${size}sqm`}</h3>
      <p>{`${hours} hr`}</p>
      <p className="price">{`${price.toLocaleString()} đ`}</p>
      <button className="action-button">{action}</button>
    </div>
  </div>
);

const OnlineBooking = () => {
  return (
    <div className="container">
      <Header />
      <h1>House Available</h1>
      <div className="property-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      <footer>
        <p>tranngocanhthuz01220003@gmail.com</p>
        <p>©2023 Đồ RẻnZ. Tự hào được xây dựng từ Wix.com</p>
      </footer>
    </div>
  );
};

export default OnlineBooking;