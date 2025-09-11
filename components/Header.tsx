import React, { useState } from 'react';
import { LogoIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#/', text: 'Home' },
    { href: '#/our-work', text: 'Our Work' },
    { href: '#/get-involved', text: 'Get Involved' },
    { href: '#/contact', text: 'Contact Us' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-2">
          <LogoIcon className="h-14 w-14" />
          <span className="hidden sm:block text-xl font-bold text-blue-900">
            IHRC
          </span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
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