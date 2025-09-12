import React from 'react';
import PageHeader from '../components/PageHeader';

const DistrictBranchesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="District Branches" 
        breadcrumb="Our Reach" 
        bgImage="https://images.unsplash.com/photo-1534294668821-28a3054f4256?q=80&w=1974&auto=format&fit=crop"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Coming Soon</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed font-body">
            We are actively working to expand our presence across all districts of West Bengal to better serve local communities. Information about our district branches and representatives will be available here soon.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed font-body">
            Thank you for your patience and support as we grow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DistrictBranchesPage;
