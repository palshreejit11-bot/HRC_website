import React, { useState, useEffect } from 'react';
import { getTeamMembers } from '../api/contentful';
import LoadingSpinner from '../components/LoadingSpinner';
import PageHeader from '../components/PageHeader';

interface Member {
  img: string;
  name: string;
  title: string;
  bio: string;
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="relative aspect-square">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-brand-charcoal">{member.name}</h3>
      <p className="text-brand-red font-semibold">{member.title}</p>
      {member.bio && <p className="text-sm text-gray-600 mt-2 font-body">{member.bio}</p>}
    </div>
  </div>
);

const MembersPage: React.FC = () => {
  const [nationalMembers, setNationalMembers] = useState<Member[]>([]);
  const [westBengalMembers, setWestBengalMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { national, westBengal } = await getTeamMembers();
        setNationalMembers(national);
        setWestBengalMembers(westBengal);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Our Team"
        breadcrumb="Meet the People Behind Our Mission"
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <LoadingSpinner className="py-20" />
          ) : (
            <div className="space-y-16">
              {/* West Bengal Body */}
              {westBengalMembers.length > 0 && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-2">West Bengal Chapter</h2>
                  <p className="text-lg text-gray-600 text-center mb-10 font-body">The dedicated team leading our efforts in West Bengal.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {westBengalMembers.map((member) => (
                      <MemberCard key={member.name} member={member} />
                    ))}
                  </div>
                </div>
              )}

              {/* National Body */}
              {nationalMembers.length > 0 && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-2">National Body</h2>
                  <p className="text-lg text-gray-600 text-center mb-10 font-body">Our national leadership guiding the mission across India.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {nationalMembers.map((member) => (
                      <MemberCard key={member.name} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MembersPage;
