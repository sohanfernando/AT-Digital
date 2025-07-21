import React from 'react';
import FAQItem from './FAQItem';

function FAQSection() {
  const faqs = [
    { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
    { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
    { question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', answer: 'Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' },
  ];

  return (
    <section className="w-full py-2 bg-white flex flex-col items-center">
      <h2 className="text-primary text-2xl md:text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
      <div className="w-full max-w-2xl flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
