import React from 'react';
import heroBackground from '../images/hero-background.jpeg';

const DEFAULT_TITLE = 'We Crush Your Competitors, Goals, And Sales Records - Without The B.S.';
const DEFAULT_BUTTON = 'GET FREE CONSULTATION';
const DEFAULT_BG = heroBackground;
const DEFAULT_GRADIENT = 'from-heroStart to-heroEnd';

function Hero({
  title = DEFAULT_TITLE,
  buttonText = DEFAULT_BUTTON,
  backgroundImage = DEFAULT_BG,
  gradient = DEFAULT_GRADIENT,
  onButtonClick,
}) {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[700px] lg:min-h-[800px] 2xl:h-[700px] flex items-center justify-center overflow-hidden">
      <img
        src={backgroundImage}
        alt="Hero background"
        className="hidden md:block w-full h-full object-cover object-center absolute inset-0 z-0 pointer-events-none select-none md:min-h-[700px] lg:min-h-[800px] 2xl:h-[700px]"
        aria-hidden="true"
        draggable="false"
      />

      <div className={`hidden md:flex absolute left-12 2xl:left-32 top-1/2 md:translate-y-[1%] 2xl:translate-y-[1%] w-[600px] max-w-xl bg-gradient-to-r ${gradient} p-8 2xl:p-12 shadow-lg flex-col z-10`}>
        <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-8 leading-tight">
          {title}
        </h1>
        <button
          className="bg-secondary text-white font-semibold px-8 py-3 rounded shadow hover:bg-orange-500 transition w-max"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>

      <div className="flex flex-col w-full md:hidden">
        <div className="w-full h-[320px] sm:h-[360px]">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover object-center"
            draggable="false"
          />
        </div>
        <div className={`w-full bg-gradient-to-r ${gradient} px-4 py-8 flex flex-col items-start`}>
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold mb-6 leading-tight">
            {title}
          </h1>
          <button
            className="bg-secondary text-white font-semibold px-6 py-3 rounded shadow hover:bg-orange-500 transition w-max"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
