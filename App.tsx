import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurWorkPage from './pages/OurWorkPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';

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
    if (route === '#/our-work') {
      document.title = 'Our Work - International Human Rights Council';
    } else if (route === '#/get-involved') {
      document.title = 'Get Involved - International Human Rights Council';
    } else if (route === '#/contact') {
      document.title = 'Contact Us - International Human Rights Council';
    } else {
      document.title = 'International Human Rights Council';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case '#/our-work':
        return <OurWorkPage />;
      case '#/get-involved':
        return <GetInvolvedPage />;
      case '#/contact':
        return <ContactPage />;
      default:
        // Covers #/ and #home etc.
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;