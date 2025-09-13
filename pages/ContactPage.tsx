import React from 'react';
import PageHeader from '../components/PageHeader';

const ContactPage: React.FC = () => {
  
  const officeLocations = [
    {
      name: "India Headquarters",
      address: "154 Raj Chambers, Alibhai Premji Marg, Grant Road, Mumbai-400007",
      phone: "",
      email: "ihrc777@gmail.com"
    },
    {
      name: "Our Headquarters",
      address: "14/2 OLD CHINA BAZAR STREET BHIKANCHAND MARKET 1ST FLOOR NEAR TEA BOARD",
      phone: "+91 8777016200",
      email: "ihrcwb8@gmail.com"
    },
    {
      name: "Switzerland Headquarters",
      address: "31 Rue Vollandes, 1207 Geneva, Switzerland",
      phone: "+41779664839",
      email: "info@ihrc-geneve.org"
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Contact Us"
        breadcrumb="Get in Touch"
        bgImage="https://res.cloudinary.com/dzrrjkubt/image/upload/v1757679883/WhatsApp_Image_2025-09-12_at_15.04.50_e02dd749_hlfn9o.jpg"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Google Form Embed */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Send Us a Message</h2>
              <div className="relative w-full h-[750px] overflow-hidden rounded-md border border-gray-200">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdnarLMfbyfcM26aiIWez2-2RDmsM97D_pmPOtHjZyaLyflFg/viewform?usp=dialog"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Us Form"
                  className="absolute top-0 left-0 w-full h-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              {officeLocations.map(office => (
                <div key={office.name} className="bg-gray-50 p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-4 border-b pb-2">{office.name}</h3>
                  <div className="space-y-3 text-gray-600 font-body">
                    <p className="flex items-start"><span className="text-brand-red mr-3 mt-1">&#x1F4CD;</span>{office.address}</p>
                    {office.phone && <p className="flex items-start"><span className="text-brand-red mr-3 mt-1">&#x1F4DE;</span><a href={`tel:${office.phone}`} className="hover:text-brand-red">{office.phone}</a></p>}
                    <p className="flex items-start"><span className="text-brand-red mr-3 mt-1">&#x2709;</span><a href={`mailto:${office.email}`} className="hover:text-brand-red">{office.email}</a></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;