import React from 'react';

const HomePage: React.FC = () => {

  const workAreas = [
    { title: 'Publications', description: 'Publishing legal materials and human rights reports.' },
    { title: 'Coalition Building', description: 'Forging international partnerships for greater impact.' },
    { title: 'Campaigns', description: 'Leading advocacy and public interest petitions.' },
    { title: 'Counseling & Advocacy', description: 'Providing expert legal and policy support.' },
    { title: 'Education', description: 'Running vital human rights education programs.' },
    { title: 'Legal Aid', description: 'Offering pro bono services and public interest litigation.' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] bg-cover bg-center text-white flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596122441416-3023425b4f3b?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-brand-charcoal opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">International Human Rights Council</h1>
          <p className="text-xl md:text-2xl mt-4 font-body max-w-3xl mx-auto">
            "Giving voice to the oppressed and holding oppressors accountable"
          </p>
          <a href="#/about" className="mt-8 inline-block bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-sm text-lg transition-transform transform hover:scale-105 duration-300 uppercase text-sm tracking-wider">
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Our Mission</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-body">
            To defend and protect the fundamental human rights of every individual in West Bengal and beyond. We are dedicated to investigating abuses, exposing the truth, and pressuring those in power to respect rights and secure justice for all.
          </p>
        </div>
      </section>

      {/* Key Work Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Our Key Areas of Work</h2>
            <p className="text-lg text-gray-600 mt-2 font-body">A multi-faceted approach to protecting human rights.</p>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-brand-charcoal mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{area.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
             <a href="#/our-work" className="bg-brand-charcoal hover:bg-brand-gray text-white font-bold py-3 px-8 rounded-sm text-lg transition-colors duration-300 uppercase text-sm tracking-wider">
              Explore Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;