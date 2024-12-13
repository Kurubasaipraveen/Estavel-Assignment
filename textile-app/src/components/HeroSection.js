import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Images */}
        <div className="hero-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AYsQyeVJl4r8BgLx6RIRZsWI9ylOB0xU-w&s"
            alt="Marble 1"
            className="hero-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4xkR3nKq69XMHSioR71U6whThWp7N5XS1w&s"
            alt="Marble 2"
            className="hero-image"
          />
        </div>

        {/* Middle Content */}
        <div className="hero-middle">
          <h1>Experience The World Of Natural Stones Like Never Before</h1>
        </div>

        {/* Right Images */}
        <div className="hero-right">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKpP4PfKTzYzmCuhPRlGfdoNoqT0PgMJsVA&s"
            alt="Marble 3"
            className="hero-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14GKp4Rq9agrOTp-ToGNvvdyBvukCTE4nwg&s"
            alt="Marble 4"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
