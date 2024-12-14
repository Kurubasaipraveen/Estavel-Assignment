import React from 'react';
import '../styles/FeacturesNew.css';

function InTheNews() {
  const newsItems = [
    {
      title: 'Bharat Business Award 2023',
      description: 'This award recognizes an employee who has come up with a new idea that has positively impacted the company.',
    },
    {
      title: 'The Print',
      description: 'This piece of recognition highlights how [Company Name] has been innovative and bold in its approach.',
    },
    {
      title: 'Times Of India',
      description: 'These are other awards achieved by individuals within [Company Name] that made significant contributions in their industry.',
    },
    {
      title: 'Hindustan Times',
      description: 'Design and Tech articles showcasing the latest trends, products, and technologies in the industry and how [Company Name] is a leader.',
    },
  ];

  return (
    <div className="in-the-news">
      <div className="news-container">
        <div className="news-header">
          <h2>In The News</h2>
          <button>VIEW MORE</button>
        </div>
        <div className="news-list">
          {newsItems.map((item, index) => (
            <div className="news-item" key={index}>
              <div className="news-number">{index + 1}</div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Heading and Button */}
        
      </div>
    </div>
  );
}

export default InTheNews;
