import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://wbhrc.netlify.app/assets/hero-1-246197f2.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
              Defending and Protecting Human Rights for All
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto drop-shadow-md font-georgia">
              We are a global movement of people fighting injustice and promoting human rights. Join us to make a difference.
            </p>
            <a
              href="#/our-work"
              className="bg-custom-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-sm text-lg transition-transform transform hover:scale-105 duration-300 uppercase text-sm tracking-wider"
            >
              Learn More
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
