import React, { useState, useEffect } from 'react';
import { getAboutPageData } from '../api/contentful';
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

const CheckIcon = () => (
    <svg className="w-6 h-6 text-custom-red mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

interface AboutPageData {
    header: { title: string; bgImage: string; };
    whoWeAre: { title: string; paragraph1: string; paragraph2: string; imageUrl: string; };
    vision: { title: string; text: string; };
    mission: { title: string; text: string; };
    objectives: { title: string; list: string[]; };
}

const AboutPage: React.FC = () => {
  const [pageData, setPageData] = useState<AboutPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutPageData();
        setPageData(data);
      } catch (error) {
        console.error("Failed to fetch about page data:", error);
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
    <div className="animate-fade-in bg-white">
      <PageHeader title={pageData.header.title} bgImage={pageData.header.bgImage} />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-custom-red pl-4">{pageData.whoWeAre.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {pageData.whoWeAre.paragraph1}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {pageData.whoWeAre.paragraph2}
                </p>
            </div>
            <div className="lg:w-1/2">
              <img src={pageData.whoWeAre.imageUrl} alt="Our team" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-custom-red pl-4">{pageData.vision.title}</h2>
              <p className="text-slate-600 leading-relaxed">{pageData.vision.text}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-custom-red pl-4">{pageData.mission.title}</h2>
              <p className="text-slate-600 leading-relaxed">{pageData.mission.text}</p>
            </div>
          </div>
        </div>
      </section>
      
       <section id="objectives" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{pageData.objectives.title}</h2>
            <div className="w-24 h-1 bg-custom-red mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {pageData.objectives.list.map((objective, index) => (
              <div key={index} className="flex items-start">
                <CheckIcon />
                <p className="text-slate-600">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;