import React from 'react';
import { LocationIcon, PhoneIcon, EmailIcon } from '../components/Icons';

interface ContactCardProps {
  title: string;
  address: string[];
  phone?: string;
  email?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, address, phone, email }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-amber-400 pb-3">{title}</h3>
    <div className="space-y-4 text-gray-700">
      <div className="flex items-start">
        <LocationIcon />
        <div>
          {address.map((line, index) => (
            <span key={index} className="block">{line}</span>
          ))}
        </div>
      </div>
      {phone && (
        <div className="flex items-center">
          <PhoneIcon />
          <span>{phone}</span>
        </div>
      )}
      {email && (
        <div className="flex items-center">
          <EmailIcon />
          <a href={`mailto:${email}`} className="text-red-700 hover:underline">{email}</a>
        </div>
      )}
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const headquarters = [
    {
      title: 'US HEADQUARTERS',
      address: ['25 Robert Pitt Drive', 'Monsey, NY 10952', 'USA'],
      phone: '+1 347 471 2786',
      email: 'contact.us@ihrc.co.in',
    },
    {
      title: 'SWITZERLAND HEADQUARTERS',
      address: ['Quai du Seujet 14,', '1201, Geneva', 'Switzerland'],
      phone: '+41 22 501 75 99',
      email: 'contact.ch@ihrc.co.in',
    },
    {
      title: 'INDIA HEADQUARTERS',
      address: ['2nd Floor, 201, Shanti Kunj Main', 'Vasant Kunj, New Delhi', 'India 110070'],
      phone: '+91 8595569502',
      email: 'contact@ihrc.co.in',
    },
  ];

  return (
    <div className="animate-fade-in">
      <header className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We are here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      </header>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {headquarters.map((hq) => (
              <ContactCard key={hq.title} {...hq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;