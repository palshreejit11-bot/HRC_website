import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash || '#/');

  useEffect(() => {
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
    <header className="sticky top-0 z-50 bg-white font-heading shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-3">
          {/* Placeholder for a proper logo SVG */}
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-full text-white font-bold text-xl">
            H
          </div>
          <span className="text-xl font-bold text-brand-charcoal">
            IHRC West Bengal
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${activeLink === link.href ? 'text-brand-red' : 'text-brand-charcoal hover:text-brand-red'}`}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm uppercase ${activeLink === link.href ? 'text-brand-red' : 'text-brand-charcoal hover:text-brand-red'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
    </header>
  );
};

export default Header;
