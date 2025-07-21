import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-[#FAF8FF] p-4 transition-all`}> 
      <button
        className={`w-full flex justify-between items-center text-left font-medium text-base focus:outline-none ${isOpen ? 'text-primary' : 'text-dark'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`ml-4 text-xl font-bold ${isOpen ? 'text-primary' : 'text-dark'}`}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-3 text-text-light text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default FAQItem;
