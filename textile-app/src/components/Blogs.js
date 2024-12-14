import React, { useRef } from 'react';
import '../styles/Blogs.css';

const Blog = () => {
  const blogPosts = [
    {
      date: 'October 23, 2024',
      comments: 0,
      title: 'Marble in Modern Kitchen Design: Why It Remains a Timeless Favorite',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/14d7af350175da9c3414a859a6404384-467x352.webp',
     
      link: '/blog/kitchen-marble',
    },
    {
      date: 'October 23, 2024',
      comments: 0,
      title: 'The Role of Marble in Luxury Commercial Spaces',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/381301677487946-467x352.jpg',
      link: '/blog/commercial-marble',
    },
    {
      date: 'October 23, 2024',
      comments: 0,
      title: 'Marble Care and Maintenance: How to Keep Your Surfaces Pristine',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/urja-infracon-and-projects-faridabad-faridabad-civil-contractors-due1vl1ets-467x352.png',
      
      link: '/blog/marble-care',
    },
    {
      date: 'October 23, 2024',
      comments: 0,
      title: 'Marble in Modern Kitchen Design: Why It Remains a Timeless Favorite',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/container-cargo-ship-import-export-business-across-globe-aerial-top-down-drone-view-running-open-sea-freight-carrying-319582594-transformed-UUtXJY0Ac-transformed-467x352.jpeg',
      
      link: '/blog/kitchen-marble',
    },
    {
      date: 'October 23, 2024',
      comments: 0,
      title: 'The Role of Marble in Luxury Commercial Spaces',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/A-spacious-feel-in-your-kitchen-where-practical-splendor-meets-design-orchestration-467x352.jpg',
      
      link: '/blog/commercial-marble',
    },
    {
      date: 'October 23, 2024',
      comments: 0,
      title: 'Marble Care and Maintenance: How to Keep Your Surfaces Pristine',
      image: 'https://stonepedia.in/wp-content/uploads/2024/10/240_F_830701413_SHu9MSkuj0loVrCuYMhzM7PT3FP7f7ME-transformed-467x352.jpeg',
      
      link: '/blog/marble-care',
    },
  ];

  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="blog-section">
      <div className="">
        <h4 className='head'>Latest Blog</h4>
        <h2 className='head1'>Watch Out Latest Blog</h2>
        <button className="view-more">View More</button>
      </div>
      <div className="blog-posts" ref={scrollContainerRef}>
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-post-content">
              <p className="blog-post-date">{post.date}</p>
              <p className="blog-post-comments">{post.comments} comments</p>
              <a href={post.link} className="blog-post-title">
                {post.title}
              </a>
            </div>
            
            <button className="read-more-button">Read More →</button>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <button className="scroll-button scroll-button-left" onClick={handleScrollLeft}>
        &lt;
      </button>
      <button className="scroll-button scroll-button-right" onClick={handleScrollRight}>
        &gt;
      </button>

    </section>
  );
};

export default Blog;
