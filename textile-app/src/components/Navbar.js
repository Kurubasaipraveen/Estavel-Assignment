// Header.js
import React from "react";
import "../styles/Navbar.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
          alt="Stone Pedia Logo"
          className="logo-image"
        />
       
      </div>
      <nav className="navigation">
        <a href="#shop" className="nav-link">
          SHOP BY CATEGORY
        </a>
        <a href="#partner" className="nav-link">
          PARTNER WITH US
        </a>
      </nav>
      <div className="actions">
        <div className="search-bar">
            
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
          <button className="search-button">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <button className="cart">
        <i class="bi bi-cart3"></i>
          <span className="cart-count">0</span>
        </button>
        <button className="menu">
          <i className="fa fa-bars"></i>
        </button>
        <i class="bi bi-text-right right-icon"></i>
      </div>
    </header>
  );
};

export default Header;
