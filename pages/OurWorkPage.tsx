import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, bgColor = 'bg-white' }) => (
  <section className={`py-16 px-6 ${bgColor}`}>
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed text-lg">
        {children}
      </p>
    </div>
  </section>
);

const OurWorkPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">Our Work in Detail</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Learn more about the specific initiatives and programs we undertake to defend and protect human rights across the globe.
          </p>
        </div>
      </header>

      <Section title="Communications and Publications">
        We will publish newsletters, journals, and magazines, and also use other publicity methods to share information. This helps keep the public informed about human rights issues and our work.
      </Section>

      <Section title="Union or Consolidations of Interests" bgColor="bg-gray-50">
        We will work to unite and organize people who are interested in human rights. By bringing people together, we can create a stronger voice for our cause.
      </Section>

      <Section title="Campaigns">
        We run campaigns to raise awareness about human rights issues and to advocate for policy changes. We will organize meetings, seminars, and workshops to educate the public and build support for our campaigns.
      </Section>

      <Section title="Counseling" bgColor="bg-gray-50">
        We provide counseling and support to victims of trauma and abuse. We will set up counseling centers to help people who have suffered from human rights violations.
      </Section>

      <Section title="Education">
        We conduct educational programs to promote a culture of human rights. We will work to educate people about their rights and responsibilities, and to promote respect for human dignity.
      </Section>

      <Section title="Legal Aid and Public Interest Litigation" bgColor="bg-gray-50">
        We provide legal aid and litigation support to victims of human rights violations. We will take legal action to protect the rights of individuals and groups, and to challenge laws and policies that violate human rights.
      </section>
    </div>
  );
};

export default OurWorkPage;
