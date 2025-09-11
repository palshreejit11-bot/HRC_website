import React from 'react';

interface WelcomeContent {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imageUrl: string;
}

const WelcomeSection: React.FC<{ content: WelcomeContent }> = ({ content }) => {
  return (
    <section id="welcome" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              {content.title}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {content.paragraph1}
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              {content.paragraph2}
            </p>
            <a
              href="#/about"
              className="bg-custom-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Read More
            </a>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={content.imageUrl} 
              alt="Group of volunteers" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
