import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';

function ServiceSection() {
  const services = [
    { 
      title: 'Web & Mobile App Development', 
      description: 'Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.', 
      image: image1,
      imagePosition: 'left'
    },
    { 
      title: 'Digital Strategy Consulting', 
      description: 'Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.', 
      image: image2,
      imagePosition: 'right'
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {services.map((service) => (
          <ServiceCard 
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            imagePosition={service.imagePosition}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
