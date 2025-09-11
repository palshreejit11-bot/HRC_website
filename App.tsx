import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/OurWorkPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import MembersPage from './pages/MembersPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import GalleryPage from './pages/GalleryPage';

const App: React.FC = () => {
  // Simple hash-based routing
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);

    // Set document title based on the current route
    let pageTitle = 'IHRCWB | International Human Rights Council';
    if (route.startsWith('#/about')) {
      pageTitle = 'About Us | IHRCWB';
    } else if (route.startsWith('#/how-we-work')) {
      pageTitle = 'How We Work | IHRCWB';
    } else if (route.startsWith('#/gallery')) {
      pageTitle = 'Gallery | IHRCWB';
    } else if (route.startsWith('#/events')) {
      pageTitle = 'Events | IHRCWB';
    } else if (route.startsWith('#/get-involved')) {
      pageTitle = 'Get Involved | IHRCWB';
    } else if (route.startsWith('#/members')) {
      pageTitle = 'Our Members | IHRCWB';
    } else if (route.startsWith('#/contact')) {
      pageTitle = 'Contact Us | IHRCWB';
    }
    document.title = pageTitle;

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case '#/about':
        return <AboutPage />;
      case '#/how-we-work':
        return <HowWeWorkPage />;
      case '#/gallery':
        return <GalleryPage />;
      case '#/events':
        return <EventsPage />;
      case '#/get-involved':
        return <GetInvolvedPage />;
      case '#/members':
        return <MembersPage />;
      case '#/contact':
        return <ContactPage />;
      default:
        // Covers #/, #home etc.
        return <HomePage />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-700 font-roboto">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;