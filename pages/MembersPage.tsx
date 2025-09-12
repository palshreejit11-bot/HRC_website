import React, { useState, useEffect } from 'react';
import { getAllMembers } from '../api/contentful';
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

interface Member {
  img: string;
  name: string;
  title: string;
}

interface MemberGroups {
  national: Member[];
  westBengal: Member[];
}

const MemberCard: React.FC<Member> = ({ img, name, title }) => (
  <div className="bg-dark-bg-secondary p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
    <img 
        src={img} 
        alt={name}
        className="w-40 h-40 rounded-full object-cover mb-5 border-4 border-gray-700 shadow-md"
    />
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-custom-red font-medium">{title}</p>
  </div>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center my-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    <div className="w-24 h-1 bg-custom-red mx-auto mt-4"></div>
  </div>
);

const MembersPage: React.FC = () => {
  const [members, setMembers] = useState<MemberGroups | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMembers();
        setMembers(data);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="animate-fade-in">
      <PageHeader title="Our Members" bgImage="https://wbhrc.netlify.app/assets/member-bg-77885b54.jpg" />

      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          {loading ? (
            <LoadingSpinner className="py-20" />
          ) : members ? (
            <>
              {members.national.length > 0 && (
                <>
                    <SectionTitle title="National Body" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.national.map((member) => (
                        <MemberCard key={member.name} {...member} />
                        ))}
                    </div>
                </>
              )}

              {members.westBengal.length > 0 && (
                <>
                    <SectionTitle title="West Bengal State Post Holders" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.westBengal.map((member) => (
                        <MemberCard key={member.name} {...member} />
                        ))}
                    </div>
                </>
              )}
            </>
          ) : (
            <p className="text-center">Could not load members.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MembersPage;