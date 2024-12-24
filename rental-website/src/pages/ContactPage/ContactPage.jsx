import React from 'react';
import './ContactPage.css';
import Header from "../../components/Header/Header";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="page-container">
        <main className="main-content">
          <section className="contact-section">
            <h1 className="contact-heading">Contact Us</h1>
            <div className="contact-info">
              <p className="address">
                1 P. Trinh Văn Bo, Xuân Phương, Nam Từ Liêm, Hà Nội 100000, Việt Nam
              </p>
              <p className="email">phamhathanh1310@gmail.com</p>
              <p className="phone">0989332876</p>
            </div>
          </section>

          <section className="opening-hours">
            <div className="hours-content">
              <h2 className="hours-heading">Opening Hours</h2>
              <p>Visit us</p>
              <p>Monday - Friday</p>
              <p>9:00am - 8:00pm</p>
              <p>Saturday and Sunday</p>
              <p>10:00am - 5:00pm</p>
            </div>
          </section>
        </main>

        <footer className="page-footer">
          <p className="footer-email">phamhathanh1310@gmail.com</p>
          <p className="footer-copyright">
            ©2023 Home4U. Tự hào được xây dựng từ Home4U
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage; 