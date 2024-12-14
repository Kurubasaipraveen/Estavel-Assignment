import React from 'react';
import '../styles/video.css'; 

const FullScreenVideo = () => {
  return (
    <div className="video-container">
      <video className="video-player" autoPlay loop muted>
        <source src="https://stonepedia.in/wp-content/uploads/2024/10/Stonepedia-T-5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FullScreenVideo;
