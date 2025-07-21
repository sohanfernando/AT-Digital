import React from 'react';

function ServiceCard({ title, description, image, imagePosition }) {
  const isRight = imagePosition === 'right';

  return (
    <div className={`flex flex-col md:flex-row ${isRight ? 'md:flex-row-reverse' : ''} items-center bg-white overflow-hidden`}> 
      <div className="md:w-1/2 w-full flex justify-center items-center p-6">
        <img src={image} alt={title} className="max-w-[220px] w-full h-auto object-contain" />
      </div>
      <div className="md:w-1/2 w-full p-6 flex flex-col gap-4 items-center md:items-start">
        <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>
        <p className="text-dark text-base mb-4">{description}</p>
        <button className="bg-secondary text-white font-semibold px-5 py-2 rounded shadow hover:bg-orange-500 transition w-max self-center md:self-start">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
