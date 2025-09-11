import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#/', text: 'Home' },
    { href: '#/about', text: 'About Us' },
    { href: '#/how-we-work', text: 'How We Work' },
    { href: '#/events', text: 'Events' },
    { href: '#/get-involved', text: 'Get Involved' },
    { href: '#/members', text: 'Members' },
    { href: '#/contact', text: 'Contact Us' },
  ];

  return (
    <header className="bg-dark-bg/90 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg font-poppins">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-2">
          <img src="https://wbhrc.netlify.app/assets/logo-85d7c177.png" alt="IHRCWB Logo" className="h-12 w-12" />
          <span className="hidden sm:block text-2xl font-bold text-white">
            IHRCWB
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-gray-300 hover:text-custom-blue transition-colors duration-300 text-sm font-medium"
            >
              {link.text}
            </a>
          ))}
          <a
            href="#/contact"
            className="bg-custom-blue text-white font-semibold py-2 px-5 rounded-md text-sm hover:bg-opacity-90 transition-all duration-300"
          >
            Get In Touch
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-dark-bg-secondary shadow-lg absolute w-full">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-gray-300 hover:text-custom-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
             <a
              href="#/contact"
              className="bg-custom-blue text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get In Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;