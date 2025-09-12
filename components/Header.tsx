import React, { useState, useEffect } from 'react';
import { getSiteData } from '../api/contentful';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState('https://wbhrc.netlify.app/assets/logo-85d7c177.png');
  const [socialLinks, setSocialLinks] = useState({ facebook: '#', twitter: '#', linkedin: '#', instagram: '#' });

  useEffect(() => {
    const fetchSiteData = async () => {
        try {
            const data = await getSiteData();
            if (data.logoUrl) {
                setLogoUrl(data.logoUrl);
            }
            if (data.socialLinks) {
                setSocialLinks(data.socialLinks);
            }
        } catch (error) {
            console.error("Failed to fetch site settings:", error);
        }
    };
    fetchSiteData();
  }, []);

  const navLinks = [
    { href: '#/', text: 'Home' },
    { href: '#/our-work', text: 'Our Work' },
    { href: '#/our-team', text: 'Our Team' },
    { href: '#/get-involved', text: 'Get Involved' },
    { href: '#/contact', text: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 font-montserrat shadow-md">
      {/* Top Bar */}
      <div className="bg-dark-charcoal text-white text-sm">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors"><FacebookIcon /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors"><TwitterIcon /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors"><LinkedInIcon /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors"><InstagramIcon /></a>
          </div>
          <a
            href="#/get-involved"
            className="bg-custom-red text-white font-bold py-2 px-5 rounded-sm text-xs tracking-wider uppercase hover:bg-opacity-90 transition-all duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#/" className="flex items-center gap-2">
            <img src={logoUrl} alt="IHRCWB Logo" className="h-14 w-14" />
            <span className="hidden sm:block text-2xl font-bold text-dark-charcoal">
              IHRCWB
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-dark-charcoal hover:text-custom-red transition-colors duration-300 font-bold text-sm uppercase tracking-wider"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-charcoal focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-dark-charcoal hover:text-custom-red transition-colors duration-300 font-bold text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
