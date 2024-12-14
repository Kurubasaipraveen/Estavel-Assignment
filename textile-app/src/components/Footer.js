import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'StonePedia Exclusive', link: '/exclusive' },
        { label: 'Best Seller', link: '/best-seller' },
        { label: 'Premium Stones', link: '/premium-stones' },
        { label: 'Shop By Color', link: '/shop-by-color' },
        { label: 'Shop By Category', link: '/shop-by-category' },
        { label: 'Applications', link: '/applications' },
        { label: 'Customer Review', link: '/customer-reviews' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Request For Quotation', link: '/request-quotation' },
        { label: 'FAQs', link: '/faqs' },
        { label: 'Blogs', link: '/blogs' },
        { label: 'Help Center', link: '/help-center' },
        { label: 'Login', link: '/login' },
        { label: 'Sign Up', link: '/sign-up' },
        { label: 'Report Complaint', link: '/report-complaint' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', link: '/about-us' },
        { label: 'Carrier', link: '/carrier' },
        { label: 'Terms & Condition', link: '/terms-and-conditions' },
        { label: 'Privacy Policy', link: '/privacy-policy' },
        { label: 'Cookies Policy', link: '/cookies-policy' },
        { label: 'Cancellation Policy', link: '/cancellation-policy' },
        { label: 'Disclaimer', link: '/disclaimer' },
      ],
    },
    {
      title: 'Reach Us',
      links: [
        { label: 'In The Press', link: '/in-the-press' },
        { label: 'Instagram', link: 'https://www.instagram.com/stonepedia' },
        { label: 'Facebook', link: 'https://www.facebook.com/stonepedia' },
        { label: 'Linkedin', link: 'https://www.linkedin.com/company/stonepedia' },
        { label: 'Youtube', link: 'https://www.youtube.com/stonepedia' },
        { label: 'Feedback', link: '/feedback' },
        { label: 'Partner With Us', link: '/partner-with-us' },
      ],
    },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="logo-container">
        <img src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png" alt="Stone Pedia" />
      
      <div className="email-container">
        <input type="email" placeholder="Your Email Address" />
        <button className="subscribe-button"><i class="bi bi-send-fill"></i></button>
      </div>
      </div>
      <div className="footer-content">
        {footerLinks.map((column, index) => (
          <div className="footer-column" key={index}>
            <h3 className="footer-title">{column.title}</h3>
            <ul>
              {column.links.map((link, index) => (
                <li key={index}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 - StonePedia Private Limited. All Rights Reserved.</p>
      </div>

      <button className="back-to-top" onClick={scrollToTop}>^</button>
    </footer>
  );
};

export default Footer;
