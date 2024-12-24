import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Main content */}
        <main className="flex-grow">
          {/* Contact Information Section */}
          <div className="text-center py-16 px-4">
            <h1 className="text-4xl font-light mb-8">Contact Us</h1>

            <div className="space-y-2 mb-8">
              <p className="text-blue-600">
                1 P. Trinh Văn Bo, Xuân Phương, Nam Từ Liêm, Hà Nội 100000, Việt Nam
              </p>
              <p className="text-blue-600">
              phamhathanh1310@gmail.com
              </p>
              <p>0989332876</p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div
              className="relative bg-cover bg-center py-16 text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/path-to-your-background-image.jpg')`
              }}
          >
            <div className="relative z-10">
              <h2 className="text-2xl mb-4">Opening Hours</h2>
              <p className="mb-2">Visit us</p>
              <p className="mb-2">Monday - Friday</p>
              <p className="mb-2">9:00am - 8:00pm</p>
              <p className="mb-2">Saturday and Sunday</p>
              <p>10:00am - 5:00pm</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 space-y-2">
          <p className="text-blue-600">phamhathanh1310@gmail.com</p>
          <p className="text-sm text-gray-500">©2023 Home4U. Tự hào được xây dựng từ Home4U</p>
        </footer>
      </div>
  );
};

export default ContactPage;