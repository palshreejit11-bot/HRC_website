import React from 'react';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  bgImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb, bgImage }) => {
  return (
    <header className="relative py-24 md:py-32 bg-cover bg-center text-center text-white" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="absolute inset-0 bg-brand-charcoal opacity-60"></div>
      <div className="relative z-10 container mx-auto px-6 animate-fade-in">
        <p className="text-sm uppercase tracking-widest font-semibold mb-2">{breadcrumb}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
