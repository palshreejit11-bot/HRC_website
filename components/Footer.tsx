import React, { useState, useEffect } from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './Icons';
import { getSiteData } from '../api/contentful';

interface SiteData {
  logoUrl: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

const Footer: React.FC = () => {
  const [siteData, setSiteData] = useState<Partial<SiteData> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSiteData();
        setSiteData({
            logoUrl: data.logoUrl,
            socialLinks: data.socialLinks,
        });
      } catch (error) {
        console.error("Failed to fetch site data for footer:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <footer className="bg-dark-bg text-gray-400 font-georgia">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
            <a href="#/" className="inline-block mb-6">
                <img src={siteData?.logoUrl || "https://wbhrc.netlify.app/assets/logo-85d7c177.png"} alt="IHRCWB Logo" className="h-16 w-16 mx-auto" />
            </a>
            <h3 className="text-2xl font-bold text-white font-montserrat mb-2">International Human Rights Council</h3>
            <p className="max-w-2xl mx-auto text-sm leading-relaxed mb-6">
                An independent organization dedicated to defending and protecting human rights for all.
            </p>
            {siteData?.socialLinks && (
                <div className="flex justify-center space-x-6 mb-8">
                    <a href={siteData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><FacebookIcon /></a>
                    <a href={siteData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><InstagramIcon /></a>
                    <a href={siteData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><TwitterIcon /></a>
                    <a href={siteData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-red transition-colors"><LinkedInIcon /></a>
                </div>
            )}
        </div>
      </div>
      <div className="bg-black/20 py-4">
          <div className="container mx-auto px-6 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} IHRCWB. All Rights Reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;