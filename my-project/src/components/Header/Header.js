import React, { useState } from 'react';
import './Header.css';
import atlogo from '../../images/at-logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <img src={atlogo} alt='AT DIGITAL logo' />
        AT DIGITAL
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'X' : '☰'}
      </button>
      <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#about-us">ABOUT US</a></li>
          <li><a href="#contact">CONTACT US</a></li>
          <li><a href="#careers">CAREERS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
