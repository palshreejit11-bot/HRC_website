import React from 'react';

interface MemberCardProps {
  name: string;
  title: string;
  bio: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, title, bio }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
    <div className="w-32 h-32 rounded-full bg-gray-300 mb-4 flex-shrink-0">
      {/* Placeholder for photo */}
    </div>
    <h3 className="text-xl font-semibold mb-1 text-gray-800">{name}</h3>
    <p className="text-red-700 font-medium mb-3">{title}</p>
    <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
  </div>
);

const MembersPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Evelyn Reed',
      title: 'Executive Director',
      bio: 'With over 20 years of experience in international law, Dr. Reed leads our organization with a passion for justice and a commitment to global human rights advocacy.',
    },
    {
      name: 'Marcus Thorne',
      title: 'Lead Counsel',
      bio: 'Marcus specializes in public interest litigation and has successfully argued landmark cases that have shaped human rights law on a national and international level.',
    },
    {
      name: 'Anya Sharma',
      title: 'Director of Campaigns',
      bio: 'Anya is a strategic campaigner who develops and executes high-impact advocacy initiatives that mobilize public support and influence policy change.',
    },
    {
      name: 'David Chen',
      title: 'Education Program Manager',
      bio: 'David designs our educational programs, working with communities and institutions to foster a deeper understanding and culture of human rights.',
    },
    {
      name: 'Sofia Reyes',
      title: 'Senior Counselor',
      bio: 'A licensed therapist, Sofia provides critical counseling and support to survivors of trauma, helping them on their journey toward healing and recovery.',
    },
    {
      name: 'Jamal Al-Farsi',
      title: 'Chief Operations Officer',
      bio: 'Jamal oversees the organization\'s operational integrity, ensuring our resources are used effectively to maximize our impact on the ground.',
    },
  ];

  return (
    <div className="animate-fade-in">
      <header className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our dedicated team of professionals brings a wealth of experience and an unwavering commitment to the fight for human rights.
          </p>
        </div>
      </header>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;