import React from 'react';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-custom-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

interface ObjectivesContent {
  title: string;
  subtitle: string;
  list: string[];
}

const ObjectivesSection: React.FC<{ content: ObjectivesContent }> = ({ content }) => {
  return (
    <section id="objectives" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{content.title}</h2>
          <p className="text-lg text-slate-600 mt-2">{content.subtitle}</p>
          <div className="w-24 h-1 bg-custom-blue mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {content.list.map((objective, index) => (
            <div key={index} className="flex items-start">
              <CheckIcon />
              <p className="text-slate-600">{objective}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
