import React from 'react';
import '../styles/Premium.css'
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
      <div className='second-followers-card'>
        <div className='first-card'>
            <h1>1M+</h1>
            <p>Sq ft stone delivered</p>
        </div>
        <div className='second-card'>
            <h1>2</h1>
            <p>National/Globally Award</p>
        </div>
        <div className='third-card'>
            <h1>20+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <div className='fourth-card'>
            <h1>99.99%</h1>
            <p>Customer Satisfied</p>
        </div>
      </div>
      
    </div>
  );
}

export default Premium;