import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-gray-300 font-body">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white font-heading mb-4">International Human Rights Council</h3>
            <p className="text-sm text-gray-400">West Bengal Chapter</p>
            <p className="mt-4 text-sm max-w-xs">Giving voice to the oppressed and holding oppressors accountable.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white font-heading mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#/our-work" className="hover:text-brand-red transition-colors">Our Work</a></li>
              <li><a href="#/members" className="hover:text-brand-red transition-colors">Our Team</a></li>
              <li><a href="#/get-involved" className="hover:text-brand-red transition-colors">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold text-white font-heading mb-4 uppercase tracking-wider">Contact India</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 mt-1">&#x1F4CD;</span> {/* Location pin emoji */}
                <span>154 Raj Chambers, Alibhai Premji Marg, Grant Road, Mumbai-400007</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">&#x1F4DE;</span> {/* Phone emoji */}
                <span>+91 7208802565</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">&#x2709;</span> {/* Email emoji */}
                <span>ihrc777@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} IHRC West Bengal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
