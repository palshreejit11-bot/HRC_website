import React, { useState, useEffect } from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon, LocationIcon, PhoneIcon, EmailIcon } from './Icons';
import { getSiteData } from '../api/contentful';

interface SiteData {
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

const Footer: React.FC = () => {
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSiteData();
      setSiteData(data);
    };
    fetchData();
  }, []);
  
  return (
    <footer className="bg-dark-bg text-gray-300 pt-16 pb-8 font-roboto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://wbhrc.netlify.app/assets/logo-85d7c177.png" alt="IHRCWB Logo" className="h-10 w-10" />
              <h3 className="text-xl font-bold text-white font-poppins">IHRCWB</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              An independent organization dedicated to defending and protecting human rights for all in West Bengal and beyond.
            </p>
            {siteData && (
              <div className="flex space-x-4 mt-6">
                <a href={siteData.socialLinks.facebook} className="text-gray-400 hover:text-custom-blue transition-colors"><FacebookIcon /></a>
                <a href={siteData.socialLinks.instagram} className="text-gray-400 hover:text-custom-blue transition-colors"><InstagramIcon /></a>
                <a href={siteData.socialLinks.twitter} className="text-gray-400 hover:text-custom-blue transition-colors"><TwitterIcon /></a>
                <a href={siteData.socialLinks.linkedin} className="text-gray-400 hover:text-custom-blue transition-colors"><LinkedInIcon /></a>
              </div>
            )}
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#/about" className="text-sm text-gray-400 hover:text-custom-blue transition-colors">About Us</a></li>
              <li><a href="#/how-we-work" className="text-sm text-gray-400 hover:text-custom-blue transition-colors">How We Work</a></li>
              <li><a href="#/events" className="text-sm text-gray-400 hover:text-custom-blue transition-colors">Events</a></li>
              <li><a href="#/get-involved" className="text-sm text-gray-400 hover:text-custom-blue transition-colors">Get Involved</a></li>
              <li><a href="#/members" className="text-sm text-gray-400 hover:text-custom-blue transition-colors">Members</a></li>
              <li><a href="#/contact" className="text-sm text-gray-400 hover:text-custom-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4 font-poppins">Contact Info</h4>
            {siteData ? (
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <LocationIcon />
                  <span className="text-gray-400">{siteData.contactInfo.address}</span>
                </li>
                <li className="flex items-start">
                  <PhoneIcon />
                  <a href={`tel:${siteData.contactInfo.phone}`} className="text-gray-400 hover:text-custom-blue transition-colors">{siteData.contactInfo.phone}</a>
                </li>
                <li className="flex items-start">
                  <EmailIcon />
                  <a href={`mailto:${siteData.contactInfo.email}`} className="text-gray-400 hover:text-custom-blue transition-colors">{siteData.contactInfo.email}</a>
                </li>
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Loading contact info...</p>
            )}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} IHRCWB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;