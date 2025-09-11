import React, { useState, useEffect } from 'react';
import { getGetInvolvedPageData } from '../api/contentful';
import LoadingSpinner from '../components/LoadingSpinner';

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

interface GetInvolvedPageData {
    header: { title: string; bgImage: string; };
    intro: { title: string; text: string; };
    sections: Section[];
    cta: { title: string; text: string; };
}

const GetInvolvedPageReal: React.FC = () => {
  const [pageData, setPageData] = useState<GetInvolvedPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGetInvolvedPageData();
        setPageData(data);
      } catch (error) {
        console.error("Failed to fetch 'Get Involved' page data:", error);
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
        
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{pageData.intro.title}</h2>
                <div className="w-24 h-1 bg-custom-blue mx-auto mt-4"></div>
                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                    {pageData.intro.text}
                </p>
            </div>
        </section>

        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pageData.sections.map((section, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold text-custom-blue mb-3">{section.title}</h3>
                            <p className="text-slate-600 text-sm">{section.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-custom-blue text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{pageData.cta.title}</h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                    {pageData.cta.text}
                </p>
                <a href="#/contact" className="bg-white text-custom-blue font-bold py-3 px-8 rounded-md text-lg hover:bg-slate-100 transition-all duration-300">
                    Contact Us
                </a>
            </div>
        </section>
    </div>
  );
};

export default GetInvolvedPageReal;
