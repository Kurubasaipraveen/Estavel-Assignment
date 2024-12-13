import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  // Array of middle content messages
  const middleContent = [
    'Experience The World Of Natural Stones Like Never Before',
    'Discover Elegance and Durability in Every Piece',
    'Unveil the Beauty of Nature in Your Space',
    'Transform Your World with Timeless Stone Designs',
  ];

  useEffect(() => {
    // Change content every 2 seconds
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % middleContent.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [middleContent.length]);

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
          <h1>{middleContent[currentContentIndex]}</h1>
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
