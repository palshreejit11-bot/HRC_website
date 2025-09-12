import React from 'react';
import PageHeader from '../components/PageHeader';

const ContactPage: React.FC = () => {
  
  const officeLocations = [
    {
      name: "India Headquarters",
      address: "154 Raj Chambers, Alibhai Premji Marg, Grant Road, Mumbai-400007",
      phone: "+91 7208802565",
      email: "ihrc777@gmail.com"
    },
    {
      name: "US Headquarters",
      address: "1126 Pitner Avenue, Evanston, IL 60202, United States",
      phone: "+1224 255 0036",
      email: "info@ihrc.in"
    },
    {
      name: "Switzerland Headquarters",
      address: "31 Rue Vollandes, 1207 Geneva, Switzerland",
      phone: "+41779664839",
      email: "info@ihrc-geneve.org"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. This is a demonstration form and does not send data.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Contact Us"
        breadcrumb="Get in Touch"
        bgImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-brand-red text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition-all duration-300">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              {officeLocations.map(office => (
                <div key={office.name} className="bg-gray-50 p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-bold text-brand-charcoal mb-4 border-b pb-2">{office.name}</h3>
                  <div className="space-y-3 text-gray-600 font-body">
                    <p className="flex items-start"><span className="text-brand-red mr-3 mt-1">&#x1F4CD;</span>{office.address}</p>
                    <p className="flex items-start"><span className="text-brand-red mr-3 mt-1">&#x1F4DE;</span><a href={`tel:${office.phone}`} className="hover:text-brand-red">{office.phone}</a></p>
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
