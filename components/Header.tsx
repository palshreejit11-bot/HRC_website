import React, { useState, useEffect } from 'react';
import { getSiteData } from '../api/contentful';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState('https://wbhrc.netlify.app/assets/logo-85d7c177.png');
  const [activeLink, setActiveLink] = useState(window.location.hash || '#/');

  useEffect(() => {
    const fetchSiteData = async () => {
        try {
            const data = await getSiteData();
            if (data.logoUrl) {
                setLogoUrl(data.logoUrl);
            }
        } catch (error) {
            console.error("Failed to fetch site settings:", error);
        }
    };
    fetchSiteData();

    const handleHashChange = () => {
      setActiveLink(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = [
    { href: '#/', text: 'Home' },
    { href: '#/about', text: 'About' },
    { href: '#/members', text: 'Members' },
    { href: '#/our-work', text: 'Our Work' },
    { href: '#/get-involved', text: 'Get Involved' },
    { href: '#/contact', text: 'Contact' },
    { href: '#/district-branches', text: 'District Branches' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-charcoal font-montserrat shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-2">
          <img src={logoUrl} alt="IHRCWB Logo" className="h-14 w-14" />
          <span className="hidden sm:block text-2xl font-bold text-white">
            IHRCWB
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className={`font-bold text-sm uppercase tracking-wider transition-colors duration-300 ${activeLink === link.href ? 'text-custom-red' : 'text-white hover:text-custom-red'}`}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-charcoal shadow-lg absolute w-full">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`font-bold text-sm uppercase ${activeLink === link.href ? 'text-custom-red' : 'text-white hover:text-custom-red'}`}
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