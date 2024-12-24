import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="header">
      <div className="header-container">
        <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="Logo" className="logo" />
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/locations" className={`nav-link ${location.pathname === '/locations' ? 'active' : ''}`}>Locations</Link>
          <Link to="/online-booking" className={`nav-link ${location.pathname === '/online-booking' ? 'active' : ''}`}>Online booking</Link>
        </div>
        <div className="header-actions">
          <Search className="icon" />
          <div className="cart-icon">
            <ShoppingBag className="icon" />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;