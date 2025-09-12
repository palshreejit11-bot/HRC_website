import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../api/contentful';
import LoadingSpinner from './LoadingSpinner';

interface HeroSlide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePageData();
        if (data.heroSlides && data.heroSlides.length > 0) {
          setSlides(data.heroSlides);
        }
      } catch (error) {
        console.error("Failed to fetch hero slides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  if (loading) {
    return <section className="h-[90vh] min-h-[600px] flex items-center justify-center"><LoadingSpinner /></section>;
  }

  if (slides.length === 0) {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-white bg-dark-bg-secondary">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold">IHRCWB</h1>
                <p>Welcome to the International Human Rights Council.</p>
            </div>
        </section>
    );
  }

  const currentSlide = slides[currentIndex];

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full text-white overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url('${slide.image}')`, opacity: index === currentIndex ? 1 : 0 }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}
      
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4 opacity-80">{currentSlide.subtitle}</h3>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
              {currentSlide.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto drop-shadow-md font-georgia">
              {currentSlide.description}
            </p>
            <a
              href="#/about"
              className="bg-custom-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-sm text-lg transition-transform transform hover:scale-105 duration-300 uppercase text-sm tracking-wider"
            >
              Learn More
            </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;