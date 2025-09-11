import React from 'react';
import {
  VolunteerIcon,
  SponsorIcon,
  DoctorIcon,
  ItProIcon,
  NgoIcon,
  BusinessIcon,
  LawyerIcon,
  MediaIcon,
  TeacherIcon,
  GovEmployeeIcon,
  SocialWorkerIcon,
  StudentIcon,
} from '../components/Icons';

interface InvolvementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InvolvementCard: React.FC<InvolvementCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full">
    <div className="bg-blue-100 text-blue-700 p-4 rounded-full mb-5">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 flex-grow mb-5">{description}</p>
    <a href="#/contact" className="mt-auto bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
      Contact Us
    </a>
  </div>
);

const GetInvolvedPage: React.FC = () => {
  const supporterTypes = [
    {
      icon: <VolunteerIcon />,
      title: 'Volunteers',
      description: 'Join our team to contribute your time and skills directly to our campaigns, events, and daily operations. Your passion can fuel our mission.',
    },
    {
      icon: <SponsorIcon />,
      title: 'Potential Sponsors',
      description: 'Support our work financially. Your sponsorship helps us fund legal aid, run campaigns, and provide essential resources to those in need.',
    },
    {
      icon: <DoctorIcon />,
      title: 'Doctors',
      description: 'Provide medical assistance, counseling, and expert testimony for victims of human rights abuses. Your expertise can bring healing and justice.',
    },
    {
      icon: <ItProIcon />,
      title: 'IT Professionals',
      description: 'Help us with our digital infrastructure, cybersecurity, and online campaigns. Your technical skills are vital in the modern age of advocacy.',
    },
    {
      icon: <NgoIcon />,
      title: 'NGOs',
      description: 'Partner with us to amplify our impact. We believe in the power of collaboration to create a stronger, unified voice for human rights.',
    },
    {
      icon: <BusinessIcon />,
      title: 'Business Houses & Exporters',
      description: 'Champion human rights in the corporate world. Partner with us on corporate social responsibility initiatives and ethical business practices.',
    },
    {
      icon: <LawyerIcon />,
      title: 'Lawyers & Advocates',
      description: 'Lend your legal expertise to our public interest litigation efforts. Help us fight for justice in the courtroom and uphold the rule of law.',
    },
    {
      icon: <MediaIcon />,
      title: 'Media Persons',
      description: 'Help us shine a light on human rights violations. Your voice can raise awareness and hold perpetrators accountable on a global stage.',
    },
    {
      icon: <TeacherIcon />,
      title: 'Teachers & Professors',
      description: 'Educate the next generation about the importance of human rights. Collaborate with us on curriculum development and educational programs.',
    },
    {
      icon: <GovEmployeeIcon />,
      title: 'Retired Government Employees',
      description: 'Your experience in public service is invaluable. Assist us with policy analysis, advocacy, and navigating governmental structures.',
    },
    {
      icon: <SocialWorkerIcon />,
      title: 'Social Workers',
      description: 'Provide crucial on-the-ground support, counseling, and assistance to victims and their families. Your compassion is at the heart of our work.',
    },
    {
      icon: <StudentIcon />,
      title: 'Students',
      description: 'Start or join a chapter at your school, help with research, or volunteer for campaigns. Be a young voice for change and justice.',
    },
  ];

  return (
    <div className="animate-fade-in">
      <header className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Get Involved & Make a Difference
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Every act of support, big or small, contributes to a world where human rights are respected and protected. Find out how you can join the movement.
          </p>
        </div>
      </header>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supporterTypes.map((supporter) => (
              <InvolvementCard key={supporter.title} {...supporter} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;