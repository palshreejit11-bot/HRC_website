import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../api/contentful';
import LoadingSpinner from '../components/LoadingSpinner';

// Reusable component for page headers
const PageHeader: React.FC<{ title: string, bgImage: string }> = ({ title, bgImage }) => (
  <header className="relative py-28 md:py-40 bg-cover bg-center text-center text-white" style={{ backgroundImage: `url('${bgImage}')` }}>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
    </div>
  </header>
);

interface Event {
    img: string;
    title: string;
    date: string;
    description: string;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
    <div className="overflow-hidden">
      <img src={event.img} alt={event.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-custom-red font-semibold mb-2">{event.date}</p>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
      <p className="text-slate-600 text-sm flex-grow">{event.description}</p>
    </div>
  </div>
);


const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="animate-fade-in">
      <PageHeader title="Events" bgImage="https://wbhrc.netlify.app/assets/events-bg-1237a347.jpg" />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <LoadingSpinner className="py-20" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard key={`${event.title}-${index}`} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;