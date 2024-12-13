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
        <span className="logo-text">
          <strong>Stone Pedia</strong>
          <span className="tagline">It's all about Stones</span>
        </span>
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
            <i className="fa fa-search"></i>
          </button>
        </div>
        <button className="cart">
          <i className="fa fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </button>
        <button className="menu">
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
