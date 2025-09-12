import React from 'react';
import Hero from '../components/Hero';

// --- Key Areas of Work Component (Defined in-file) ---

// Reusable Icon Wrapper
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-16 h-16 bg-dark-bg-secondary rounded-full flex items-center justify-center mb-4 border-2 border-custom-red">
        {children}
    </div>
);

// Specific Icons (simple SVGs for demonstration)
const AdvocacyIcon = () => <svg className="w-8 h-8 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" /></svg>;
const LitigationIcon = () => <svg className="w-8 h-8 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const ResearchIcon = () => <svg className="w-8 h-8 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const EducationIcon = () => <svg className="w-8 h-8 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>;
const CampaignsIcon = () => <svg className="w-8 h-8 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.354A1.76 1.76 0 017.15 9.17l9.62-3.368a1.76 1.76 0 012.158 2.158l-3.368 9.62a1.76 1.76 0 01-1.396 1.157l-6.354 2.147A1.76 1.76 0 0111 19.24z"></path></svg>;
const CommunityIcon = () => <svg className="w-8 h-8 text-custom-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;


const KeyAreasOfWork: React.FC = () => {
    const workItems = [
        { icon: <AdvocacyIcon />, title: 'Advocacy', description: 'We pressure governments and corporations to uphold human rights.' },
        { icon: <LitigationIcon />, title: 'Litigation', description: 'We provide legal support to victims of human rights violations.' },
        { icon: <ResearchIcon />, title: 'Research', description: 'We investigate and expose abuses to bring perpetrators to justice.' },
        { icon: <EducationIcon />, title: 'Education', description: 'We raise public awareness about human rights issues and solutions.' },
        { icon: <CampaignsIcon />, title: 'Campaigns', description: 'We mobilize public support to demand change and accountability.' },
        { icon: <CommunityIcon />, title: 'Community Outreach', description: 'We empower local communities to stand up for their rights.' },
    ];

    return (
        <section id="key-areas" className="py-20 bg-dark-charcoal">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Our Key Areas of Work</h2>
                    <p className="text-lg text-gray-400 mt-2 font-georgia">Our approach to defending human rights worldwide.</p>
                    <div className="w-24 h-1 bg-custom-red mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workItems.map((item, index) => (
                        <div key={index} className="bg-dark-bg-secondary p-8 rounded-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                            <IconWrapper>{item.icon}</IconWrapper>
                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-georgia">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <KeyAreasOfWork />
    </div>
  );
};

export default HomePage;