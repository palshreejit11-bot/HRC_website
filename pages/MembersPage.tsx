import React, { useState, useEffect } from 'react';
import { getAllMembers } from '../api/mockApi';
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

const MemberCard: React.FC<Member> = ({ img, name, title }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
    <img 
        src={img} 
        alt={name}
        className="w-40 h-40 rounded-full object-cover mb-5 border-4 border-white shadow-md"
    />
    <h3 className="text-xl font-bold text-slate-800">{name}</h3>
    <p className="text-custom-blue font-medium">{title}</p>
  </div>
);

const MembersPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <LoadingSpinner className="py-20" />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {members.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MembersPage;
