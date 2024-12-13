import React from 'react';
import '../styles/ClientTestimonial.css'

function ClientTestimonial() {
  const testimonial = {
    name: 'Gunjan Sharma',
    rating: 5,
    avatar: 'gunjan_sharma.jpg',
    message: 'The support team is very helpful and has great customer service. I highly recommend it!',
  };

  return (
    <div className="client-testimonial">
        <h4>Testimonial</h4>
        
        <h2>What Our Happy Clients Say About Us</h2>
      <div className="testimonial-and-consultation">
        
        {/* Testimonial Card - Carousel */}
        <div className="testimonial-card">
          <div className="testimonial-content">
            <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
            <p>{testimonial.message}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fa fa-star"></i>
              ))}
            </div>
            <h4>{testimonial.name}</h4>
          </div>
          
        </div>
        {/* Consultation Form Card */}
        <div className="consultation-form">
          <h2>Book Consultation Now</h2>
          <p>Our dedicated team will get back to you within 24 hours.</p>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Company Name" />
            <textarea placeholder="Write Your Message"></textarea>
            <button type="submit">SUBMIT REQUEST</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonial;
