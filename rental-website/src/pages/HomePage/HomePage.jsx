import React from 'react';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Welcome/Welcome';
import GetToKnow from '../../components/GetToKnow/GetToKnow';
import Filter from '../../components/Filter/Filter';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import AboutUs from '../../components/AboutUs/AboutUs';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  const properties = [
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 40000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 45000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 42000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "House & Design",
      price: 35000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "Apartment & Design",
      price: 16000000
    },
    {
      image: "/api/placeholder/400/300",
      title: "Apartment & Design",
      price: 18000000
    }
  ];

  return (
      <div className="homepage">
        <Header />
        <Welcome />
        <GetToKnow />
        <Filter />
        <div className="house-available">
          <h2>House Available</h2>
          <div className="properties-grid">
            {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
        <AboutUs />
        <Testimonial />
        <Footer />
      </div>
  );
};

export default HomePage;