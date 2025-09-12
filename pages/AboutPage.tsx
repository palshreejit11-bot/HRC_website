import React from 'react';
import PageHeader from '../components/PageHeader';

const AboutPage: React.FC = () => {
    const coreWorkAreas = [
      { title: "Communications & Publications", description: "We produce and disseminate legal materials, reports, and educational content to inform the public and policymakers about critical human rights issues." },
      { title: "Coalition Building", description: "We believe in the power of partnership. We collaborate with national and international organizations to amplify our voice and achieve shared goals." },
      { title: "Campaigns", description: "Our team launches targeted campaigns, including public interest petitions and advocacy efforts, to address systemic human rights violations and push for legislative change." },
      { title: "Counseling & Advocacy", description: "We provide expert legal and policy support to victims of human rights abuses, guiding them through complex legal systems and advocating on their behalf." },
      { title: "Education", description: "Through workshops, seminars, and training programs, we work to build a culture of human rights awareness and empower individuals to defend their rights." },
      { title: "Legal Aid & Public Interest Litigation", description: "We offer pro bono legal services to those who cannot afford representation, taking on landmark cases to set legal precedents and protect fundamental rights." },
    ];


  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="About IHRC West Bengal" 
        breadcrumb="Who We Are" 
        bgImage="https://res.cloudinary.com/dzrrjkubt/image/upload/v1757678960/WhatsApp_Image_2025-09-12_at_15.04.51_56c1b6b2_bbgqyl.jpg"
      />

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-brand-charcoal mb-4 border-l-4 border-brand-red pl-4">Our History</h2>
                <p className="text-gray-700 leading-relaxed mb-4 font-body">
                  The International Human Rights Council West Bengal is a chapter of a leading independent organization dedicated to defending and protecting human rights for all. We are a passionate team of activists, lawyers, and volunteers committed to creating a world where every individual is treated with dignity and respect.
                </p>
                <p className="text-gray-700 leading-relaxed font-body">
                  Our work is grounded in the principles of the Universal Declaration of Human Rights. We investigate abuses, expose the facts widely, and pressure those with power to respect rights and secure justice.
                </p>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Our team discussing" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-charcoal mb-4 border-l-4 border-brand-red pl-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed font-body">To create a society in West Bengal where human rights are valued and upheld, where every person can achieve their full potential in an environment of peace, equality, and justice.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-charcoal mb-4 border-l-4 border-brand-red pl-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed font-body">To work for the protection and promotion of human rights for all, with a focus on empowering marginalized communities, advocating for policy reform, and ensuring access to justice for victims of violations.</p>
            </div>
          </div>
        </div>
      </section>
      
       {/* Core Work Areas */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Our Six Core Work Areas</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreWorkAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">{area.title}</h3>
                <p className="text-gray-600 font-body">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;