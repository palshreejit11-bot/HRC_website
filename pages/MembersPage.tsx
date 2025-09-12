import React from 'react';
import PageHeader from '../components/PageHeader';

interface Member {
  img: string;
  name: string;
  title: string;
}
const FounderBody: Member[] = [
  { img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757621024/WhatsApp_Image_2025-09-11_at_15.47.20_b84a137a_rinofu_05c952.jpg', name: 'Sunmy Shah', title: 'Founder Chairman' },

];
const nationalBody: Member[] = [
  { img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757621024/WhatsApp_Image_2025-09-11_at_15.47.20_b84a137a_rinofu_05c952.jpg', name: 'Arumoy Bhattacharjee', title: 'Founder Chairman' },
  { img: 'https://i.pravatar.cc/300?u=asrutyesh', name: 'Dr Asrutyesh Biswas', title: 'National President' },
  { img: 'https://i.pravatar.cc/300?u=aftab', name: 'Aftab Qadri', title: 'National President' },
  { img: 'https://i.pravatar.cc/300?u=suresh', name: 'Suresh Pandey', title: 'Executive President' },
];

const westBengalBody: Member[] = [
  { img: 'https://i.pravatar.cc/300?u=arun', name: 'Arun Kumar Mandal', title: 'Director' },
  { img: 'https://i.pravatar.cc/300?u=jaydeb', name: 'Jaydeb Mondal', title: 'President' },
  { img: 'https://i.pravatar.cc/300?u=debashish', name: 'Debashish Barua', title: 'Youth General Secretary' },
  { img: 'https://i.pravatar.cc/300?u=sukumar', name: 'Sukumar Das', title: 'President CFO' },
  { img: 'https://i.pravatar.cc/300?u=mainal', name: 'Mainal Haque Molla', title: 'Board Assistant' },
];

const MemberCard: React.FC<Member> = ({ img, name, title }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
    <img 
        src={img} 
        alt={`Photo of ${name}`}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
    />
    <h3 className="text-xl font-bold text-brand-charcoal">{name}</h3>
    <p className="text-brand-red font-medium">{title}</p>
  </div>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center my-12">
    <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">{title}</h2>
    <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
  </div>
);

const MembersPage: React.FC = () => {
  return (
    <div className="animate-fade-in bg-gray-50">
      <PageHeader 
        title="Our Leadership Team" 
        breadcrumb="Meet the Team" 
        bgImage="https://images.unsplash.com/photo-1542317524-738870b223a8?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle title="National Body" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {nationalBody.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>

          <SectionTitle title="West Bengal State Post Holders" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {westBengalBody.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;