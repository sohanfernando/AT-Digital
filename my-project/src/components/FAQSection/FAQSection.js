// FAQSection.js
import React from 'react';
import FAQItem from './FAQItem';
import './FAQ.css'; // Import the CSS file

function FAQSection() {
  const faqs = [
    { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
    { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
    { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently asked questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </section>
  );
}

export default FAQSection;
