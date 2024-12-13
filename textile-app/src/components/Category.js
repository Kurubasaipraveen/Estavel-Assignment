import React from 'react';
import '../styles/Category.css';

const Category = () => {
  const categories = [
    { name: "Imported Granite", image: "https://stonepedia.in/wp-content/uploads/2024/10/ig-01.png" },
    { name: "Onyx", image: "https://stonepedia.in/wp-content/uploads/2024/10/on-01.png" },
    { name: "Quartz", image: "https://stonepedia.in/wp-content/uploads/2024/10/q-01.png" },
    { name: "Travertine", image: "https://stonepedia.in/wp-content/uploads/2024/10/Untitled-1-01.png" },
    { name: "Sandstone", image: "https://stonepedia.in/wp-content/uploads/2024/10/1-07-1.png" },
  ];

  return (
    <div className="category-container">
      <div className="category-header">
        <h4>what we offer?</h4>
        <h2>Choose By Category</h2>
        <button className="view-more">View More</button>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
