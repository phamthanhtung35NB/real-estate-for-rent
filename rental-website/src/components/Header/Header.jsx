import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => (
    <nav className="header">
      <div className="header-container">
        <div className="logo">RENTZ</div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/contact" className="nav-link active">Contact</a>
          <a href="/locations" className="nav-link">Locations</a>
          <a href="/shop" className="nav-link">Shop</a>
          <a href="/booking" className="nav-link">Online booking</a>
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

export default Header;