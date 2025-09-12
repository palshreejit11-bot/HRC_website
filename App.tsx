import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import OurWorkPage from './pages/OurWorkPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    // SEO Meta Tag Management
    const updateMetaTags = (path: string) => {
      const meta = {
        title: 'IHRCWB | International Human Rights Council West Bengal',
        description: 'Official website of the International Human Rights Council, West Bengal. We are dedicated to defending human rights, investigating abuses, and securing justice for all.',
      };

      switch (path) {
        case '#/':
          // Default is already set
          break;
        case '#/about':
          meta.title = 'About Us | IHRCWB';
          meta.description = 'Learn about the history, mission, and vision of the International Human Rights Council West Bengal. Discover our core work areas and our commitment to justice.';
          break;
        case '#/members':
          meta.title = 'Our Team | IHRCWB';
          meta.description = 'Meet the dedicated team of activists, lawyers, and professionals at the International Human Rights Council West Bengal, leading the fight for human rights.';
          break;
        case '#/our-work':
          meta.title = 'Our Work | IHRCWB';
          meta.description = 'Explore our core activities, including legal aid, public interest litigation, advocacy campaigns, education, and counseling to protect human rights in West Bengal.';
          break;
        case '#/events':
          meta.title = 'Events | IHRCWB';
          meta.description = 'Stay updated on upcoming events, workshops, and campaigns organized by the International Human Rights Council West Bengal.';
          break;
        case '#/gallery':
          meta.title = 'Gallery | IHRCWB';
          meta.description = 'View photos from our events, campaigns, and field work. See the impact of the International Human Rights Council West Bengal in action.';
          break;
        case '#/get-involved':
          meta.title = 'Get Involved | Support IHRCWB';
          meta.description = 'Join our mission to defend human rights. Learn how you can volunteer, donate, or partner with the International Human Rights Council West Bengal.';
          break;
        case '#/contact':
          meta.title = 'Contact Us | IHRCWB';
          meta.description = 'Get in touch with the International Human Rights Council. Find contact details and addresses for our headquarters and offices.';
          break;
        default:
          // Keep default for unknown routes
          break;
      }

      document.title = meta.title;
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', meta.description);
      }
       const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', meta.title);
      }
      const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
      if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute('content', meta.description);
      }
    };

    const handleHashChange = () => {
      const newRoute = window.location.hash || '#/';
      setRoute(newRoute);
      updateMetaTags(newRoute);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial load
    updateMetaTags(route);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case '#/':
        return <HomePage />;
      case '#/about':
        return <AboutPage />;
      case '#/members':
        return <MembersPage />;
      case '#/our-work':
        return <OurWorkPage />;
      case '#/events':
        return <EventsPage />;
      case '#/gallery':
        return <GalleryPage />;
      case '#/get-involved':
        return <GetInvolvedPage />;
      case '#/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;