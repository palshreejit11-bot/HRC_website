import React, { useState, useEffect } from 'react';
import HeroSlider from '../components/Hero';
import WelcomeSection from '../components/OurWork';
import ObjectivesSection from '../components/GetInvolved';
import LoadingSpinner from '../components/LoadingSpinner';
import { getHomePageData } from '../api/contentful';

// Define data types
interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
}
interface Event {
    img: string;
    title: string;
    date: string;
    description: string;
}
interface Member {
    img: string;
    name: string;
    title: string;
}
interface WelcomeContent {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imageUrl: string;
}
interface ObjectivesContent {
  title: string;
  subtitle: string;
  list: string[];
}
interface CtaContent {
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
}
interface HomePageData {
  heroSlides: Slide[];
  content: {
    welcome: WelcomeContent;
    objectives: ObjectivesContent;
    cta: CtaContent;
  };
  latestEvents: Event[];
  teamPreview: Member[];
}

// Reusable SectionTitle component
const SectionTitle: React.FC<{ children: React.ReactNode, subtitle: string }> = ({ children, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{children}</h2>
        <p className="text-lg text-slate-600 mt-2">{subtitle}</p>
        <div className="w-24 h-1 bg-custom-red mx-auto mt-4"></div>
    </div>
);

const LatestEventsSection: React.FC<{ events: Event[] }> = ({ events }) => (
    <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <SectionTitle subtitle="Stay updated with our recent activities">Latest Events</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map(event => (
                    <div key={event.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                        <img src={event.img} alt={event.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-6">
                            <p className="text-sm text-custom-red font-semibold mb-2">{event.date}</p>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                            <p className="text-slate-600 text-sm">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TeamPreviewSection: React.FC<{ members: Member[] }> = ({ members }) => (
    <section id="team" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <SectionTitle subtitle="The dedicated individuals behind our mission">Our Team Members</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map(member => (
                    <div key={member.name} className="text-center">
                        <img src={member.img} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                        <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                        <p className="text-custom-red">{member.title}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="#/members" className="bg-custom-red text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300">
                    View All Members
                </a>
            </div>
        </div>
    </section>
);

const BecomeMemberCTA: React.FC<{ content: CtaContent }> = ({ content }) => (
    <section id="join" className="py-20 bg-custom-red text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                {content.text}
            </p>
            <a href={content.buttonLink} className="bg-white text-custom-red font-bold py-3 px-8 rounded-md text-lg hover:bg-slate-100 transition-all duration-300">
                {content.buttonText}
            </a>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  const [pageData, setPageData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePageData();
        setPageData(data);
      } catch (error) {
        console.error("Failed to fetch home page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!pageData) {
    return <div className="text-center py-20">Failed to load content. Please try again later.</div>;
  }

  return (
    <div className="animate-fade-in">
      <HeroSlider slides={pageData.heroSlides} />
      <WelcomeSection content={pageData.content.welcome} />
      <ObjectivesSection content={pageData.content.objectives} />
      <LatestEventsSection events={pageData.latestEvents} />
      <TeamPreviewSection members={pageData.teamPreview} />
      <BecomeMemberCTA content={pageData.content.cta} />
    </div>
  );
};

export default HomePage;