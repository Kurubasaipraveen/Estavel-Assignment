import React from 'react';
import '../styles/Bestselling.css'
function BestSellingProducts() {
  const products = [
    {
      name: 'Khadipur Black',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/kaddapah-black-limestone-01-.png',
    },
    {
      name: 'Udaipur Green',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/Udaipur-Green-Marble-01-.png',
    },
    {
      name: 'Dholpur Beige',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/Dholpur-Beige-Limestone-01-.png',
    },
    {
      name: 'Rajasthan Green Granite',
      price: '₹1,000/sq.ft',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/Kuppam-Green-Granite-01-.png',
    },
  ];

  return (
    <div className="best-selling-products">
        <h4>Best In Demand</h4>
      <h2>Best Selling Products</h2>
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

export default BestSellingProducts;