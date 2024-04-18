// Hero.js
import React from 'react';
import './Hero.css'; // Ensure you have the CSS file in the same directory
import heroBackground from '../../images/hero-background.jpeg'; // Adjust the path as necessary

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-content">
        <h1>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <button className="hero-button">GET FREE CONSULTATION</button>
      </div>
    </section>
  );
}

export default Hero;
