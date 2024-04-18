import React from 'react';
import './Footer.css';
import atlogo from '../../images/at-logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-brand">
          <span className="footer-logo"> <img src={atlogo} alt="AT Digital Logo" />AT DIGITAL</span>
          <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        <div className="footer-links">
          <div className="footer-technologies">
            <h4>Our Technologies</h4>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
