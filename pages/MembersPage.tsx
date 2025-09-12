import React from 'react';
import PageHeader from '../components/PageHeader';

interface Member {
  img: string;
  name: string;
  title: string;
  bio?: string;
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

const placeholderImg = 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1763784577/blank-profile-picture-973460_960_720_sgx9vu.webp';

const allMembers: Member[] = [
  // Founder (1)
  { name: 'Sunny Shah', title: 'Founder', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757670186/WhatsApp_Image_2025-09-11_at_15.47.30_55a7d1f5_eo41ng.jpg' },
  // National President (4)
  { name: 'Atif Ali Qadri', title: 'National President', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672412/WhatsApp_Image_2025-09-11_at_15.47.15_be0726d0_ednhj4.jpg' },
  { name: 'Dr Arunjyaotl Bhikkhu', title: 'National Vice President', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672482/WhatsApp_Image_2025-09-11_at_15.47.20_92e810fe_gdar7g.jpg' },
  { name: 'Suresh Pandey', title: 'Executive President National', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672535/WhatsApp_Image_2025-09-11_at_15.47.22_f8404bcb_aqwkpe.jpg' },
  { name: 'Gautam Vartia', title: 'National Member', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672572/WhatsApp_Image_2025-09-11_at_15.47.21_754a9b9f_wbczag.jpg' },
  // West Bengal President (2)
  { name: 'Mr. Bapi Roy', title: 'West Bengal President', img: placeholderImg },
  { name: 'Member Name 6', title: 'West Bengal President', img: placeholderImg },
  // State Youth President (1)
  { name: 'Mr. Subrata Das', title: 'State Youth President', img: placeholderImg },
  // Women President Empowerment (2)
  { name: 'Ms. Priya Singh', title: 'Women President Empowerment', img: placeholderImg },
  { name: 'Member Name 9', title: 'Women President Empowerment', img: placeholderImg },
  // Civil Justice President (1)
  { name: 'Mr. Rohan Gupta', title: 'Civil Justice President', img: placeholderImg },
  // Youth President (Social) (1)
  { name: 'Mr. Amit Kumar', title: 'Youth President (Social)', img: placeholderImg },
  // Health Officer (1)
  { name: 'Dr. Anjali Verma', title: 'Health Officer', img: placeholderImg },
  // West Bengal General Secretary (2)
  { name: 'Mr. Sanjay Bose', title: 'West Bengal General Secretary', img: placeholderImg },
  { name: 'Member Name 14', title: 'West Bengal General Secretary', img: placeholderImg },
  // Director of Department (1)
  { name: 'Ms. Rina Chowdhury', title: 'Director PF Department', img: placeholderImg },
  // Youth Skill and Sports Department (2)
  { name: 'Mr. Vikram Sen', title: 'Youth Skill and Sports Department', img: placeholderImg },
  { name: 'Member Name 17', title: 'Youth Skill and Sports Department', img: placeholderImg },
  { name: 'Member Name 18', title: 'Youth Skill and Sports Department', img: placeholderImg },
];

const sectionTitles = [
  'Founder',
  'National President',
  'West Bengal President',
  'State Youth President',
  'Women President Empowerment',
  'Civil Justice President',
  'Youth President (Social)',
  'Health Officer',
  'West Bengal General Secretary',
  'Director PF Department',
  'Youth Skill and Sports Department',
];

const MembersPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Our Team"
        breadcrumb="Meet the People Behind Our Mission"
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 space-y-16">

          {sectionTitles.map(title => {
            const membersInSection = allMembers.filter(member => member.title === title);
            if (membersInSection.length === 0) return null;

            return (
              <div key={title}>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-2">{title}</h2>
                <div className="w-24 h-1 bg-brand-red mx-auto mt-2 mb-10"></div>
                <div className={
                    membersInSection.length === 1 
                    ? "max-w-sm mx-auto" 
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                }>
                  {membersInSection.map((member, index) => (
                    <MemberCard key={`${member.name}-${index}`} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MembersPage;