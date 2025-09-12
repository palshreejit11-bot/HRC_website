import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import OurWorkPage from './pages/OurWorkPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import DistrictBranchesPage from './pages/DistrictBranchesPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
      case '#/get-involved':
        return <GetInvolvedPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/district-branches':
        return <DistrictBranchesPage />;
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
