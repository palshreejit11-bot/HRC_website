import React, { useState, useEffect } from 'react';
import { getHowWeWorkPageData } from '../api/contentful';
import LoadingSpinner from '../components/LoadingSpinner';
import Slideshow from '../components/Slideshow';

const PageHeader: React.FC<{ title: string, bgImage: string }> = ({ title, bgImage }) => (
  <header className="relative py-28 md:py-40 bg-cover bg-center text-center text-white" style={{ backgroundImage: `url('${bgImage}')` }}>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
    </div>
  </header>
);

interface Section {
    title: string;
    content: string;
}

interface HowWeWorkPageData {
    header: { title: string; bgImage: string; };
    sections: Section[];
    slideshowImages: string[];
}

const HowWeWorkPage: React.FC = () => {
  const [pageData, setPageData] = useState<HowWeWorkPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHowWeWorkPageData();
        setPageData(data);
      } catch (error) {
        console.error("Failed to fetch 'How We Work' page data:", error);
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
        <PageHeader title={pageData.header.title} bgImage={pageData.header.bgImage} />
        
        {pageData.slideshowImages.length > 0 && (
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Work in Action</h2>
                    <div className="w-24 h-1 bg-custom-red mx-auto mb-10"></div>
                    <Slideshow images={pageData.slideshowImages} />
                </div>
            </section>
        )}

        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 max-w-4xl space-y-12">
                {pageData.sections.map((section, index) => (
                    <div key={index} className="bg-dark-bg-secondary p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 border-l-4 border-custom-red pl-4">
                            {section.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            {section.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
};

export default HowWeWorkPage;