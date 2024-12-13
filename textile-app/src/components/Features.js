import React from 'react';
import '../styles/Feactures.css';

const Features = () => {
  const features = [
    { title: "Rigorous Quality Control", description: "Multi-level inspections ensure every stone meets the highest durability and aesthetic standards." },
    { title: "Certified Suppliers & Compliance", description: "Sourced from certified suppliers, every stone complies with global and local regulations." },
    { title: "Expert Guidance", description: "StonePedia’s specialists provide expert advice on material selection, application, and maintenance." },
    { title: "Comprehensive High-Quality Stones", description: "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics" },
    { title: "Doorstep Delivery", description: "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics." },
    { title: "Guaranteed Order Fulfillment", description: "Accurate and timely order processing to meet all project timelines without delays." },
  ];

  return (
    <section className="features">
      <h4>redefining stone sourcing</h4>
      <h2>why stonePedia ?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
