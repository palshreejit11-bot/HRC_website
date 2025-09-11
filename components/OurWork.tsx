import React from 'react';
import { LegalIcon, CampaignIcon, EducationIcon, CounselingIcon } from './Icons';

interface WorkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-amber-100 text-amber-600 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurWork: React.FC = () => {
  const workAreas = [
    {
      icon: <LegalIcon />,
      title: "Legal Aid & Litigation",
      description: "We provide legal aid and litigation support to victims of human rights violations.",
    },
    {
      icon: <CampaignIcon />,
      title: "Campaigns",
      description: "We run campaigns to raise awareness about human rights issues and to advocate for policy changes.",
    },
    {
      icon: <EducationIcon />,
      title: "Education",
      description: "We conduct educational programs to promote a culture of human rights.",
    },
    {
      icon: <CounselingIcon />,
      title: "Counseling",
      description: "We provide counseling and support to victims of trauma and abuse.",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How We Work</h2>
          <p className="text-lg text-gray-600 mt-2">Our multi-faceted approach to protecting human rights.</p>
          <div className="w-24 h-1 bg-red-700 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {workAreas.map((area) => (
            <WorkCard key={area.title} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;