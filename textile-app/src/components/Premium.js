import React from 'react';
import '../styles/Bestselling.css'
function Premium() {
  const products = [
    {
      name: 'Peacock Green Quartzite',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/peacock-green-QuartzUpdated.jpg',
    },
    {
      name: 'Amazon Green Quartzite',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/amazon-green-quartzite-01-.png',
    },
    {
      name: 'Kota Brown Sandstone',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/Kota-Brown-Sandstone-01-.png',
    },
    {
      name: 'Cheema Pink',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/chima-pink-granite-Custom.jpg',
    },
  ];

  return (
    <div className="best-selling-products">
        <h4>Quality You Can Trust</h4>
      <h2>Our Premium Stones</h2>
      <button className="view-more">VIEW MORE</button>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.name}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Premium;