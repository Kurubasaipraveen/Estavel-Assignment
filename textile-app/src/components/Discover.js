import React from 'react';
import '../styles/Discover.css'
function StonepediaExclusive() {
  const stones = [
    { name: 'Marble', image: 'https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg' },
    { name: 'Granite', image: 'https://stonepedia.in/wp-content/uploads/2023/04/Marble-2.jpg' },
    { name: 'Quartzite', image: 'https://stonepedia.in/wp-content/uploads/2023/04/Marble-3.jpg' },
    { name: 'Limestone', image: 'https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg' },
    { name: 'Soapstone', image: 'https://stonepedia.in/wp-content/uploads/2023/04/Marble-5.jpg' },
    { name: 'Onyx', image: 'https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg' },
  ];

  return (
    <div className="stonepedia-exclusive">
    <div className='discover-card'>
      <h4 className='head1'>Explore the finest stones we offer</h4>
      <h2 className='head'>StonePedia Exclusive</h2>
      <div className="stone-list">
        {stones.map((stone) => (
          <div className="stone" key={stone.name}>
            <img src={stone.image} alt={stone.name} />
            <p>{stone.name}</p>
          </div>
        ))}
      </div>
      <button className="view-more">VIEW MORE</button>
    </div>
    </div>
  );
}

export default StonepediaExclusive;
