import React from 'react';
import PageHeader from '../components/PageHeader';

const GetInvolvedPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Get Involved"
        breadcrumb="Support Our Mission"
        bgImage="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop"
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Your Support Makes a Difference</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed font-body">
            The fight for human rights requires a collective effort. Whether you are an individual, a corporation, or a community group, there are numerous ways you can contribute to our work. Your involvement helps us provide legal aid, conduct vital research, and advocate for justice.
          </p>
        </div>
      </section>
      
      {/* Ways to Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Volunteer */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-red">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Volunteer</h3>
              <p className="text-gray-600 font-body mb-6">
                Lend your time and skills. We welcome volunteers from all backgrounds, including legal professionals, researchers, writers, and event organizers.
              </p>
              <a href="#/contact" className="font-bold text-brand-red hover:underline">Contact Us to Volunteer &rarr;</a>
            </div>
            
            {/* Donate */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-red">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Donate</h3>
              <p className="text-gray-600 font-body mb-6">
                Your financial contribution, no matter the size, directly funds our legal aid services, advocacy campaigns, and educational programs.
              </p>
              <a href="#/contact" className="font-bold text-brand-red hover:underline">Support Our Work &rarr;</a>
            </div>

            {/* Partner */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-red">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Become a Partner</h3>
              <p className="text-gray-600 font-body mb-6">
                We collaborate with organizations and corporations that share our commitment to human rights. Let's work together for a greater impact.
              </p>
              <a href="#/contact" className="font-bold text-brand-red hover:underline">Inquire About Partnership &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the Fight for Human Rights?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
                Every action counts. Reach out today to find out how you can be a part of the change.
            </p>
            <a href="#/contact" className="bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-sm text-lg transition-colors duration-300 uppercase text-sm tracking-wider">
                Contact Us Now
            </a>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
