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

const ContactPage: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSiteData();
        setContactInfo(data.contactInfo);
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
    // In a real application, you would handle form submission here using a service like EmailJS or a backend endpoint.
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
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-600">Subject</label>
                  <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600">Message</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-custom-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300">
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
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-custom-blue">{contactInfo.phone}</a>
                    </li>
                    <li className="flex items-start">
                      <EmailIcon />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-custom-blue">{contactInfo.email}</a>
                    </li>
                  </ul>
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
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;