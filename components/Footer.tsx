import React, { useState, useEffect } from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './Icons';
import { getSiteData } from '../api/contentful';

interface SiteData {
  logoUrl: string;
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
      try {
        const data = await getSiteData();
        setSiteData(data);
      } catch (error) {
        console.error("Failed to fetch site data for footer:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <footer className="bg-dark-charcoal text-gray-300 pt-16 pb-8 font-georgia">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 text-sm">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={siteData?.logoUrl || "https://wbhrc.netlify.app/assets/logo-85d7c177.png"} alt="IHRCWB Logo" className="h-12 w-12" />
              <h3 className="text-xl font-bold text-white font-montserrat">IHRCWB</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              An independent organization dedicated to defending and protecting human rights for all.
            </p>
             {siteData && (
              <div className="flex space-x-4">
                <a href={siteData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><FacebookIcon /></a>
                <a href={siteData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><InstagramIcon /></a>
                <a href={siteData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><TwitterIcon /></a>
                <a href={siteData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><LinkedInIcon /></a>
              </div>
            )}
          </div>

          {/* Our Work Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-montserrat">Our Work</h4>
            <ul className="space-y-2">
              <li><a href="#/our-work" className="text-gray-400 hover:text-custom-red transition-colors">Investigation</a></li>
              <li><a href="#/our-work" className="text-gray-400 hover:text-custom-red transition-colors">Advocacy</a></li>
              <li><a href="#/our-work" className="text-gray-400 hover:text-custom-red transition-colors">Litigation</a></li>
              <li><a href="#/our-work" className="text-gray-400 hover:text-custom-red transition-colors">Policy Reform</a></li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-montserrat">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#/get-involved" className="text-gray-400 hover:text-custom-red transition-colors">Donate</a></li>
              <li><a href="#/get-involved" className="text-gray-400 hover:text-custom-red transition-colors">Volunteer</a></li>
              <li><a href="#/our-team" className="text-gray-400 hover:text-custom-red transition-colors">Careers</a></li>
              <li><a href="#/our-team" className="text-gray-400 hover:text-custom-red transition-colors">Internships</a></li>
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 font-montserrat">Contact Us</h4>
            {siteData ? (
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400">{siteData.contactInfo.address}</span>
                </li>
                <li className="flex items-start">
                  <a href={`tel:${siteData.contactInfo.phone}`} className="text-gray-400 hover:text-custom-red transition-colors">{siteData.contactInfo.phone}</a>
                </li>
                <li className="flex items-start">
                  <a href={`mailto:${siteData.contactInfo.email}`} className="text-gray-400 hover:text-custom-red transition-colors">{siteData.contactInfo.email}</a>
                </li>
              </ul>
            ) : (
              <p className="text-gray-500">Loading...</p>
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
