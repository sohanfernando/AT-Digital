import React from 'react';
import './ServiceCard.css'; // Make sure to create a corresponding CSS file

function ServiceCard({ title, description, image, imagePosition }) {
  const imageClass = imagePosition === 'right' ? 'image-right' : 'image-left';

  return (
    <div className="service-card">
      <div className={`service-image ${imageClass}`}>
        <img src={image} alt={title} />
      </div>
      <div className="service-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="service-button">LEARN MORE</button>
      </div>
    </div>
  );
}

export default ServiceCard;
