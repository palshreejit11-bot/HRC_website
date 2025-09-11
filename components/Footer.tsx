import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">International Human Rights Council</h3>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} IHRC. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">India Headquarters</h4>
            <p>2nd Floor, 201, Shanti Kunj Main, Vasant Kunj, New Delhi, India 110070</p>
            <p>Phone: +91 8595569502</p>
            <p>Email: <a href="mailto:contact@ihrc.co.in" className="hover:text-amber-400">contact@ihrc.co.in</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;