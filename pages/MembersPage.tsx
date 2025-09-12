import React from 'react';
import PageHeader from '../components/PageHeader';

interface Member {
  img: string;
  name: string;
  title: string;
  bio: string;
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden group h-full flex flex-col">
    <div className="relative aspect-square">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-center">
      <h3 className="text-xl font-bold text-brand-charcoal">{member.name}</h3>
      <p className="text-brand-red font-semibold">{member.title}</p>
      {member.bio && <p className="text-sm text-gray-600 mt-2 font-body">{member.bio}</p>}
    </div>
  </div>
);

const leadership = [
  {
    name: 'Sunny Shah',
    title: 'Founder',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757670186/WhatsApp_Image_2025-09-11_at_15.47.30_55a7d1f5_eo41ng.jpg',
    bio: 'Visionary founder of the International Human Rights Council.',
  },
  {
    name: 'Adv. A. K. Sharma',
    title: 'National President',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Mr. Bapi Roy',
    title: 'West Bengal President',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Mr. Subrata Das',
    title: 'State Youth President',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Ms. Priya Singh',
    title: 'Women President Empowerment',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Mr. Rohan Gupta',
    title: 'Civil Justice President',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Mr. Amit Kumar',
    title: 'Youth President (Social)',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Dr. Anjali Verma',
    title: 'Health Officer',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Mr. Sanjay Bose',
    title: 'West Bengal General Secretary',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Ms. Rina Chowdhury',
    title: 'Director PF Department',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
  {
    name: 'Mr. Vikram Sen',
    title: 'Youth Skill and Sports Department',
    img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp',
    bio: '',
  },
];

const MembersPage: React.FC = () => {

  const founder = leadership[0];
  const topLeaders = leadership.slice(1, 3);
  const departmentHeads = leadership.slice(3);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Our Team"
        breadcrumb="Meet the People Behind Our Mission"
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 space-y-16">

          {/* Founder Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-2">Founder</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-2 mb-10"></div>
            <div className="max-w-sm mx-auto">
              <MemberCard member={founder} />
            </div>
          </div>

          {/* Top Leadership Section */}
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-2">Presidents</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-2 mb-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {topLeaders.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          {/* Department Heads Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-2">State Council & Department Heads</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-2 mb-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {departmentHeads.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MembersPage;
