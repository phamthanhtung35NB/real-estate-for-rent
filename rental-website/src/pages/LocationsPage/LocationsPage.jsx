// LocationsPage.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import './LocationsPage.css';
import Header from "../../components/Header/Header";

const LocationsPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <CheckCircle className="icon" />
        <h1 className="title">Our Locations</h1>
        <p className="subtitle">Visit us</p>

        <div className="locations">
          <div className="location">
            <h2 className="location-name">Location 1</h2>
            <p className="location-address">1 Trinh Van Bo</p>
            <p className="location-city">Xuan Phuong, Nam Tu Liem, Hanoi</p>
          </div>

          <div className="location">
            <h2 className="location-name">Location 2</h2>
            <p className="location-address">144 Xuan Thuy</p>
            <p className="location-city">Dich Vong Hau, Cau Giay District, Hanoi</p>
          </div>

          <div className="location">
            <h2 className="location-name">Location 3</h2>
            <p className="location-address">79 Nguy Nhu Kon Tum</p>
            <p className="location-city">Nhan Chinh, Thanh Xuan, Hanoi</p>
          </div>
        </div>

        <button className="button">Get in Touch</button>
      </div>

      <footer className="footer">
        <p className="contact-email">tranngocanhthuz01220003@gmail.com</p>
        <p className="footer-note">©2023 Đồ RẻnZ. Tự hào được xây dựng từ Wix.com</p>
      </footer>
    </div>
  );
};

export default LocationsPage;