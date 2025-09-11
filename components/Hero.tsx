import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Defending and Protecting Human Rights for All
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
          International Human Rights Council is one of the world’s leading independent organizations dedicated to defending and protecting human rights for all.
        </p>
        <a 
          href="#/our-work" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
