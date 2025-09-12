import React from 'react';

// Simple SVG icons for demonstration
const InvestigationIcon = () => (
    <svg className="w-12 h-12 text-custom-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);

const AdvocacyIcon = () => (
    <svg className="w-12 h-12 text-custom-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" /></svg>
);

const LitigationIcon = () => (
    <svg className="w-12 h-12 text-custom-red mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);

const HowWeWorkSection: React.FC = () => {
  const workItems = [
    {
      icon: <InvestigationIcon />,
      title: 'Investigation',
      description: 'We systematically investigate and expose human rights abuses, holding perpetrators accountable for their actions.'
    },
    {
      icon: <AdvocacyIcon />,
      title: 'Advocacy',
      description: 'We advocate for policy changes and pressure governments to uphold international human rights laws and standards.'
    },
    {
      icon: <LitigationIcon />,
      title: 'Litigation',
      description: 'We provide legal support and representation to victims of human rights violations, seeking justice through the courts.'
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal">How We Work</h2>
          <p className="text-lg text-slate-600 mt-2 font-georgia">Our approach to defending human rights worldwide.</p>
          <div className="w-24 h-1 bg-custom-red mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {workItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-2xl font-bold text-dark-charcoal mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-georgia">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
