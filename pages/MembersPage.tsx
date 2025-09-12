import React from 'react';
import PageHeader from '../components/PageHeader';

interface Member {
  img: string;
  name: string;
  title: string;
  bio?: string;
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col w-full sm:w-72">
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

// Restructured data to ensure correct grouping
const leadershipSections: { [key: string]: Member[] } = {
  'Founder': [
    { name: 'Sunny Shah', title: 'Founder', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757670186/WhatsApp_Image_2025-09-11_at_15.47.30_55a7d1f5_eo41ng.jpg' },
  ],
  'National President': [
    { name: 'Atif Ali Qadri', title: 'National President', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672412/WhatsApp_Image_2025-09-11_at_15.47.15_be0726d0_ednhj4.jpg' },
    { name: 'Dr Arunjyoti Bhikkhu', title: 'National Vice President', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672482/WhatsApp_Image_2025-09-11_at_15.47.20_92e810fe_gdar7g.jpg' },
    { name: 'Suresh Pandey', title: 'Executive President National', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672535/WhatsApp_Image_2025-09-11_at_15.47.22_f8404bcb_aqwkpe.jpg' },
    { name: 'Gautam Vartia', title: 'National Member', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757672572/WhatsApp_Image_2025-09-11_at_15.47.21_754a9b9f_wbczag.jpg' },
  ],
  'West Bengal President': [
    { name: 'Sukumar Das', title: 'President (WB) (SEB)', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757673084/WhatsApp_Image_2025-09-11_at_15.47.30_aa6c61eb_mvgfas.jpg' },
    { name: 'Moinul Haque Molla', title: 'West Bengal President(SJE)', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757673241/WhatsApp_Image_2025-09-11_at_15.47.31_f2065413_pbo2yn.jpg' },
  ],
  'State Youth President': [
    { name: 'Anurag Panja', title: 'State Youth President(WB)(Civil Justice)', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757673351/WhatsApp_Image_2025-09-11_at_15.47.29_befe8219_grbtvm.jpg' },
  ],
  'Women President Empowerment': [
    { name: 'Dolan Mitra', title: 'Women President Empowerment(WB)', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757621024/WhatsApp_Image_2025-09-11_at_15.47.20_b84a137a_rinofu_05c952.jpg' },
    { name: 'Satabdi Bose Rudra', title: 'Women President (WB)(Civil Justice)', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757673544/WhatsApp_Image_2025-09-11_at_15.47.21_53b351cd_wljj9a.jpg' },
  ],
  'Civil Justice President': [
    { name: 'Soumya Rudra', title: 'West Bengal President(Civil justice)', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757677438/WhatsApp_Image_2025-09-11_at_15.47.21_bf72055c_r2xfit.jpg' },
  ],
  'Youth President (Social)': [
    { name: 'Sanjay Chamaria', title: 'West Bengal State Board social Justice & Empowerment', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757677589/WhatsApp_Image_2025-09-11_at_15.47.22_d8814c1f_qbgdxi.jpg' },
  ],
  'Health Officer': [
    { name: 'Dr. Soumyajit Chakraborty ', title: 'Health Officer West Bengal State Board', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757677686/WhatsApp_Image_2025-09-11_at_15.47.29_1f987cc2_p2ayqn.jpg' },
  ],
  'West Bengal General Secretary': [
    { name: 'Krishty Chetri', title: ' General Secretary West BengalSocial Protection Dept', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757682302/Explore_other_styles_dh5hfj.png' },
    { name: ' Narendra Kumar Gurung', title: '(Vice President) WB Social Protection Dept.', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757682302/Explore_other_styles_dh5hfj.png' },
  ],
  'Director Of Department': [
    { name: 'Arun Kumar Mondal ', title: '(Director Dept.)(WB)', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757682302/Explore_other_styles_dh5hfj.png' },
  ],
  'Youth Skill and Sports Department': [
    { name: 'Jaydeb Mondal', title: 'President', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757682302/Explore_other_styles_dh5hfj.png' },
    { name: 'Debashish Barua', title: 'Youth General Secretary', img: 'https://res.cloudinary.com/dzrrjkubt/image/upload/v1757678004/WhatsApp_Image_2025-09-11_at_15.47.23_621ce708_xrpyx8.jpg' },
  ],
};

const sectionOrder = [
  'Founder',
  'National President',
  'West Bengal President',
  'State Youth President',
  'Women President Empowerment',
  'Civil Justice President',
  'Youth President (Social)',
  'Health Officer',
  'West Bengal General Secretary',
  'Director Of Department',
  'Youth Skill and Sports Department',
];


const MembersPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Our Team"
        breadcrumb="Meet the People Behind Our Mission"
        bgImage="https://res.cloudinary.com/dzrrjkubt/image/upload/v1757679082/WhatsApp_Image_2025-09-12_at_15.04.51_481bcfb7_yuztyr.jpg"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 space-y-16">

          {sectionOrder.map(title => {
            const membersInSection = leadershipSections[title];
            if (!membersInSection || membersInSection.length === 0) return null;

            return (
              <div key={title}>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal text-center mb-2">{title}</h2>
                <div className="w-24 h-1 bg-brand-red mx-auto mt-2 mb-10"></div>
                <div className="flex flex-wrap gap-8 justify-center">
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