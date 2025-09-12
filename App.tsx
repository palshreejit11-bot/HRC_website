import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurWorkPage from './pages/OurWorkPage';
import ContactPage from './pages/ContactPage';
import MembersPage from './pages/MembersPage';
import GetInvolvedPage from './pages/GetInvolvedPage';

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
    if (route.startsWith('#/our-work')) {
      pageTitle = 'Our Work | IHRCWB';
    } else if (route.startsWith('#/our-team')) {
      pageTitle = 'Our Team | IHRCWB';
    } else if (route.startsWith('#/get-involved')) {
      pageTitle = 'Get Involved | IHRCWB';
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
      case '#/our-work':
        return <OurWorkPage />;
      case '#/our-team':
        return <MembersPage />;
      case '#/get-involved':
        return <GetInvolvedPage />;
      case '#/contact':
        return <ContactPage />;
      default:
        // Covers #/, #home etc.
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white text-dark-charcoal font-georgia">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
