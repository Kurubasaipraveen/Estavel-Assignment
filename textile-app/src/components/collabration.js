import React, { useRef, useEffect } from 'react';
import '../styles/collabration.css';

function OurValuableClients() {
  const clients = [
    { name: 'Godrej Properties', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-17.png' },
    { name: 'Jindal Realty', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-13.png' },
    { name: 'BL Kashyap', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-12.png' },
    { name: 'aipl', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-09.png' },
    { name: 'Elara', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-08.png' },
    { name: 'HLP Galleria', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-02.png' },
    { name: 'Noble Callista', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-01.png' },
    { name: 'DLF', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-15.png' },
    { name: 'Shapoorji Pallonji', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-14.png' },
    { name: 'ROF', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-16.png' },
  ];
  const clientssecond = [
    { name: 'Godrej Properties', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-04.png' },
    { name: 'Jindal Realty', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-05.png' },
    { name: 'BL Kashyap', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-03.png' },
    { name: 'aipl', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-02.png' },
    { name: 'Elara', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-01.png' },
    { name: 'HLP Galleria', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-14.png' },
    { name: 'Noble Callista', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-07.png' },
    { name: 'DLF', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-10.png' },
    { name: 'Shapoorji Pallonji', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-11.png' },
    { name: 'ROF', logo: 'https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-19.png' },
  ];
  const clientListRefLeft = useRef(null);
  const clientListRefRight = useRef(null);

  const scrollSpeed = 20; 
  const scrollAmount = 2; 

  useEffect(() => {
    const scrollLeftInterval = setInterval(() => {
      clientListRefLeft.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });

      // Reset the scroll position to the left when the end is reached
      if (clientListRefLeft.current.scrollLeft >= clientListRefLeft.current.scrollWidth / 2) {
        clientListRefLeft.current.scrollLeft = 0; // Reset scroll to the left side
      }
    }, scrollSpeed);

    const scrollRightInterval = setInterval(() => {
      clientListRefRight.current.scrollBy({
        left: -scrollAmount, // Negative value for left to right scroll
        behavior: 'smooth',
      });

      // Reset the scroll position to the left when the end is reached
      if (clientListRefRight.current.scrollLeft <= 0) {
        clientListRefRight.current.scrollLeft = clientListRefRight.current.scrollWidth / 2; // Reset scroll to the right side
      }
    }, scrollSpeed);

    return () => {
      clearInterval(scrollLeftInterval);
      clearInterval(scrollRightInterval);
    };
  }, []);

  return (
    <div className="our-clients">
      <h4>Our Clients</h4>
      <h2>Our Valuable Clients</h2>

      {/* Client logos container for left to right scrolling */}
      <div className="client-list" ref={clientListRefLeft}>
        {clients.concat(clients).map((client) => (
          <div className="client" key={client.name}>
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>

      {/* Client logos container for right to left scrolling */}
      <div className="client-list" ref={clientListRefRight}>
        {clientssecond.concat(clientssecond).map((client) => (
          <div className="client" key={client.name}>
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurValuableClients;
