import React from 'react';
import atlogo from '../images/at-logo.png'

function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-10 pb-4 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center gap-2 text-xl font-bold mb-2">
            <img src={atlogo} alt="AT Digital Logo" className="h-8 w-8" />
            <span className="tracking-wide">at digital</span>
          </div>
          <p className="text-accent-cuddly text-sm max-w-xs mt-2">
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
          </p>
        </div>
        {/* Responsive row for services/technologies at sm and above, column below sm */}
        <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-2">Our Technologies</h4>
            <ul className="space-y-1 text-accent-cuddly">
              <li className='cursor-pointer hover:text-white hover:underline'>ReactJS</li>
              <li className='cursor-pointer hover:text-white hover:underline'>Gatsby</li>
              <li className='cursor-pointer hover:text-white hover:underline'>NextJS</li>
              <li className='cursor-pointer hover:text-white hover:underline'>NodeJS</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-2">Our Services</h4>
            <ul className="space-y-1 text-accent-cuddly">
              <li className='cursor-pointer hover:text-white hover:underline'>Social Media Marketing</li>
              <li className='cursor-pointer hover:text-white hover:underline'>Web & Mobile App Development</li>
              <li className='cursor-pointer hover:text-white hover:underline'>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs text-accent-cuddly">
        <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms & Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
