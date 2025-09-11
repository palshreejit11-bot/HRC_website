import React, { useState, useEffect } from 'react';
import { LocationIcon, PhoneIcon, EmailIcon } from '../components/Icons';
import { getSiteData } from '../api/contentful';
import LoadingSpinner from '../components/LoadingSpinner';

// Reusable component for page headers
const PageHeader: React.FC<{ title: string, bgImage: string }> = ({ title, bgImage }) => (
  <header className="relative py-28 md:py-40 bg-cover bg-center text-center text-white" style={{ backgroundImage: `url('${bgImage}')` }}>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
    </div>
  </header>
);

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

interface Headquarters {
    location: string;
    address: string[];
    phone?: string;
    email?: string;
}

const ContactPage: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [headquarters, setHeadquarters] = useState<Headquarters[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSiteData();
        setContactInfo(data.contactInfo);
        setHeadquarters(data.headquarters || []);
      } catch (error) {
        console.error("Failed to fetch contact data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form and does not send emails.');
    (e.target as HTMLFormElement).reset();
  };


  return (
    <div className="animate-fade-in">
      <PageHeader title="Contact Us" bgImage="https://wbhrc.netlify.app/assets/contact-bg-99c017d2.jpg" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-red focus:border-custom-red" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-red focus:border-custom-red" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-600">Subject</label>
                  <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-red focus:border-custom-red" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600">Message</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-red focus:border-custom-red"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-custom-red text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h2>
              {loading && <LoadingSpinner className="py-10" />}
              {!loading && !contactInfo && <p>Could not load contact information.</p>}
              {contactInfo && (
                <>
                  <ul className="space-y-4 text-slate-600 mb-8">
                    <li className="flex items-start">
                      <LocationIcon />
                      <span>{contactInfo.address}</span>
                    </li>
                    <li className="flex items-start">
                      <PhoneIcon />
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-custom-red">{contactInfo.phone}</a>
                    </li>
                    <li className="flex items-start">
                      <EmailIcon />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-custom-red">{contactInfo.email}</a>
                    </li>
                  </ul>
                  {contactInfo.mapUrl && (
                    <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={contactInfo.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="IHRCWB Location"
                      ></iframe>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {headquarters.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Headquarters Information</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {headquarters.map(hq => (
                <div key={hq.location} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-custom-red mb-4">{hq.location}</h3>
                  <div className="text-slate-600 text-sm">
                    {hq.address.map((line, i) => <p key={i}>{line}</p>)}
                    {hq.phone && <p className="mt-2"><b>Phone:</b> {hq.phone}</p>}
                    {hq.email && <p className="mt-2"><b>Email:</b> {hq.email}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ContactPage;