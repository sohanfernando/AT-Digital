import React, { useState } from 'react';
import atlogo from '../images/at-logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-primary text-white flex items-center justify-between px-8 py-6 shadow-md">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <img src={atlogo} alt='AT DIGITAL logo' className="h-8 w-8" />
        <span className="tracking-wide">at digital</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-base font-medium">
          <li><a href="#services" className="hover:underline">SERVICES</a></li>
          <li><a href="#about-us" className="hover:underline">ABOUT US</a></li>
          <li><a href="#contact" className="hover:underline">CONTACT US</a></li>
          <li><a href="#careers" className="hover:underline">CAREERS</a></li>
        </ul>
      </nav>
      {/* Mobile menu toggle */}
      <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="absolute top-16 right-8 bg-white text-black rounded shadow-lg p-4 z-50 md:hidden">
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li><a href="#home" className="hover:underline" onClick={toggleMenu}>HOME</a></li>
            <li><a href="#services" className="hover:underline" onClick={toggleMenu}>SERVICES</a></li>
            <li><a href="#about-us" className="hover:underline" onClick={toggleMenu}>ABOUT US</a></li>
            <li><a href="#contact" className="hover:underline" onClick={toggleMenu}>CONTACT US</a></li>
            <li><a href="#careers" className="hover:underline" onClick={toggleMenu}>CAREERS</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
