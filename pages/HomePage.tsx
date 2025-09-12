import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import HowWeWorkSection from '../components/OurWork';
import LoadingSpinner from '../components/LoadingSpinner';
import { getHomePageData } from '../api/contentful';

interface Event {
    img: string;
    title: string;
    date: string;
    description: string;
}

interface HomePageData {
  latestEvents: Event[];
}

const LatestUpdatesSection: React.FC<{ events: Event[] }> = ({ events }) => (
    <section id="updates" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal">Latest Updates</h2>
                <p className="text-lg text-slate-600 mt-2 font-georgia">Stay informed about our recent activities and news.</p>
                <div className="w-24 h-1 bg-custom-red mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map(event => (
                    <div key={event.title} className="bg-white rounded-sm shadow-lg overflow-hidden group border border-slate-200">
                        <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <p className="text-sm text-slate-500 font-georgia mb-2">{event.date}</p>
                            <h3 className="text-xl font-bold text-dark-charcoal mb-3 h-16">{event.title}</h3>
                            <a href="#/our-work" className="font-bold text-custom-red text-sm uppercase tracking-wider hover:underline">Read More →</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const GetInvolvedCTA: React.FC = () => (
    <section id="join" className="py-20 bg-dark-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-georgia text-slate-300">
                Your support is crucial to our work. Join us in the fight for human rights and help create a world where everyone can live with dignity and justice.
            </p>
            <a href="#/get-involved" className="bg-custom-red text-white font-bold py-3 px-8 rounded-sm text-lg hover:bg-opacity-90 transition-all duration-300 uppercase text-sm tracking-wider">
                Join Us Now
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
        // We only need latestEvents for the new design
        const data = await getHomePageData();
        setPageData({ latestEvents: data.latestEvents });
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
    return <div className="text-center py-20 font-georgia">Failed to load content. Please try again later.</div>;
  }

  return (
    <div className="animate-fade-in">
      <Hero />
      <HowWeWorkSection />
      <LatestUpdatesSection events={pageData.latestEvents} />
      <GetInvolvedCTA />
    </div>
  );
};

export default HomePage;
