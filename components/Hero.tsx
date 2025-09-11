import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
}

interface HeroProps {
  slides: Slide[];
}

const Hero: React.FC<HeroProps> = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) {
    return <section className="h-[90vh] min-h-[600px] w-full bg-slate-200 flex items-center justify-center"><p>Loading Slides...</p></section>;
  }

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
           <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg md:text-xl text-custom-red font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {slides[currentSlide].title}
            </h1>
            <p className="text-base md:text-lg mb-8 font-light max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {slides[currentSlide].description}
            </p>
            <a
              href="#/about"
              className="bg-custom-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md text-lg transition-transform transform hover:scale-105 duration-300 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              Learn More
            </a>
        </div>
      </div>
       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-custom-red' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;