import React from 'react';
import Header from '../../components/Header/Header';
import Welcome from '../../components/HomePage/Welcome/Welcome';
import GetToKnow from '../../components/HomePage/GetToKnow/GetToKnow';
import Filter from '../../components/HomePage/Filter/Filter';
import PropertyCard from '../../components/HomePage/PropertyCard/PropertyCard';
import AboutUs from '../../components/HomePage/AboutUs/AboutUs';
import Testimonial from '../../components/HomePage/Testimonial/Testimonial';
import Newsletter from '../../components/HomePage/Newsletter/Newsletter';
import Footer from '../../components/HomePage/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  const properties = [
    {
      image: "images/house1.jpg",
      title: "House & Design",
      price: 40000000
    },
    {
      image: "images/house2.jpg",
      title: "House & Design",
      price: 45000000
    },
    {
      image: "images/house3.jpg",
      title: "House & Design",
      price: 42000000
    },
    {
      image: "images/house4.jpg",
      title: "House & Design",
      price: 35000000
    },
    {
      image: "images/apartment1.jpg",
      title: "Apartment & Design",
      price: 16000000
    },
    {
      image: "images/apartment2.jpg",
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
        <Newsletter />
        <Footer />
      </div>
  );
};

export default HomePage;