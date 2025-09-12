import React from 'react';
import PageHeader from '../components/PageHeader';

interface WorkArea {
  title: string;
  description: string;
  imageUrl: string;
}

const workAreas: WorkArea[] = [
  { 
    title: "Communications & Publications", 
    description: "We believe that information is power. Our communications team works tirelessly to produce and disseminate high-quality legal materials, in-depth reports on human rights conditions, and educational content. These publications serve to inform the public, equip fellow activists, and provide policymakers with the evidence needed to enact meaningful change.",
    imageUrl: "https://res.cloudinary.com/dzrrjkubt/image/upload/v1757679889/WhatsApp_Image_2025-09-12_at_15.04.51_d2fce488_lfofnf.jpg"
  },
  { 
    title: "Coalition Building", 
    description: "Human rights challenges are often global in nature and require a united front. We actively build and maintain strong partnerships with a network of local, national, and international organizations. By collaborating with other NGOs, legal bodies, and academic institutions, we amplify our collective voice and coordinate efforts for a greater, more sustainable impact.",
    imageUrl: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    title: "Campaigns", 
    description: "To address systemic human rights violations, we design and execute targeted advocacy campaigns. These campaigns range from filing public interest petitions in court to launching public awareness drives. We mobilize community support and engage with media to shine a spotlight on injustice and demand accountability from governments and corporations.",
    imageUrl: "https://res.cloudinary.com/dzrrjkubt/image/upload/v1757679881/WhatsApp_Image_2025-09-12_at_15.04.47_825bf9fe_huheny.jpg"
  },
  { 
    title: "Counseling & Advocacy", 
    description: "For individuals and communities facing human rights abuses, navigating the legal and political landscape can be daunting. We provide expert legal counseling and policy advocacy support. Our team guides victims through complex procedures, represents their interests in various forums, and advocates for policy changes that protect and promote human rights at a structural level.",
    imageUrl: "https://res.cloudinary.com/dzrrjkubt/image/upload/v1757614328/samples/imagecon-group.jpg"
  },
  { 
    title: "Education", 
    description: "A society that understands its rights is better equipped to defend them. Our educational programs are central to our mission. We conduct workshops, seminars, and training sessions for students, law enforcement officials, and the general public to build a widespread culture of human rights awareness and empower the next generation of defenders.",
    imageUrl: "https://res.cloudinary.com/dzrrjkubt/image/upload/v1757679882/WhatsApp_Image_2025-09-12_at_15.04.47_c8a4181f_rzqstr.jpg"
  },
  { 
    title: "Legal Aid & Public Interest Litigation", 
    description: "Access to justice is a fundamental right. We are committed to providing free, pro bono legal services to marginalized individuals and communities who cannot afford representation. Furthermore, we strategically engage in public interest litigation, taking on landmark cases that have the potential to set legal precedents and secure rights for millions.",
    imageUrl: "https://res.cloudinary.com/dzrrjkubt/image/upload/v1757679882/WhatsApp_Image_2025-09-12_at_15.04.47_d2a3c14d_r97yjq.jpg"
  }
];

const OurWorkPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Our Core Areas of Work"
        breadcrumb="What We Do"
        bgImage="https://res.cloudinary.com/dzrrjkubt/image/upload/v1757680329/A_wide-angle_hopefu_hhdfc6.png"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {workAreas.map((area, index) => (
            <div key={area.title} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img src={area.imageUrl} alt={area.title} className="rounded-lg shadow-xl object-cover w-full h-80"/>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-brand-charcoal mb-4 border-l-4 border-brand-red pl-4">{area.title}</h2>
                <p className="text-gray-700 leading-relaxed font-body">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;