// FAQItem.js
import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-lg shadow p-4 transition-all ${isOpen ? 'ring-2 ring-primary' : ''}`}> 
      <button
        className="w-full flex justify-between items-center text-left text-dark font-medium text-base focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="ml-4 text-primary text-xl font-bold">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-3 text-text-light text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default FAQItem;
