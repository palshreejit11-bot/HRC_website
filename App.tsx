import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/OurWorkPage'; // Mapped to #/about
import ContactPage from './pages/ContactPage';
import MembersPage from './pages/MembersPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import HowWeWorkPage from './pages/HowWeWorkPage'; // Mapped to #/our-work

// Placeholder page component for District Branches
const DistrictBranchesPage: React.FC = () => {
  const PageHeader: React.FC<{ title: string, bgImage: string }> = ({ title, bgImage }) => (
    <header className="relative py-28 md:py-40 bg-cover bg-center text-center text-white" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      </div>
    </header>
  );

  return (
    <div className="animate-fade-in">
      <PageHeader title="District Branches" bgImage="https://images.unsplash.com/photo-1519120126480-87e3fe5d511e?q=80&w=2070&auto=format&fit=crop" />
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Presence Across West Bengal</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Information about our district branches will be updated here soon. We are working to expand our reach to provide support and defend human rights in every corner of the state.
          </p>
        </div>
      </section>
    </div>
  );
};


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

  useEffect(() => {
    let pageTitle = 'IHRCWB | International Human Rights Council';
    switch (route) {
        case '#/about': pageTitle = 'About | IHRCWB'; break;
        case '#/members': pageTitle = 'Members | IHRCWB'; break;
        case '#/our-work': pageTitle = 'Our Work | IHRCWB'; break;
        case '#/get-involved': pageTitle = 'Get Involved | IHRCWB'; break;
        case '#/contact': pageTitle = 'Contact Us | IHRCWB'; break;
        case '#/district-branches': pageTitle = 'District Branches | IHRCWB'; break;
    }
    document.title = pageTitle;
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case '#/about':
        return <AboutPage />;
      case '#/members':
        return <MembersPage />;
      case '#/our-work':
        return <HowWeWorkPage />;
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
    <div className="bg-dark-charcoal text-gray-300 font-georgia">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;