// This file no longer connects to Contentful. It has been repurposed to serve
// hardcoded data provided by the client, maintaining the original function signatures
// to minimize changes throughout the application.

// Simulate network delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const MEMBER_PLACEHOLDER_IMG = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

// --- MOCK DATA BASED ON CLIENT'S CONTENT ---

const MOCK_MEMBERS = {
  national: [
    { name: 'Sunny Shah', title: 'Founder Chairman', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Dr Arumjyoti Bhikkhu', title: 'National Vice President', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Atif Ali Qadri', title: 'National President', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Suresh Pandey', title: 'Executive President National', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Gautam Vastia', title: 'National Member', img: MEMBER_PLACEHOLDER_IMG },
  ],
  westBengal: [
    { name: 'Sukumar Das', title: 'President (WB) (SEB)', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Moinul Haque Molla', title: 'WB President (SJE)', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Anurag Panja', title: 'State Youth President - Civil Justice', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Dolon Mitra', title: 'Women President Empower, W.B', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Satabdi Bose Rudra', title: 'Women President Civil Justice', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Soumya Rudra', title: 'W.B President Civil Justice', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Sanjay Chamaria', title: 'Youth President, Social Justice & Empowerment', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Dr. Soumyajit Chakraborty', title: 'Health Officer, WB state Board', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Krishly Chetri', title: 'General Secretary, WB Social Protection Dept', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Narendra Kumar Gurung', title: 'Vice President, WB Social Protection Dept', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Arun Kumar Mandal', title: 'Director (WB), Director Dept', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Jaydeb Mondal', title: 'President, Youth Skill & Sports Dept', img: MEMBER_PLACEHOLDER_IMG },
    { name: 'Debashish Barua', title: 'Youth General Secretary, Youth Skill & Sports Dept', img: MEMBER_PLACEHOLDER_IMG },
  ]
};

const MOCK_SITE_DATA = {
  contactInfo: {
    address: '14/2 OLD CHINA BAZAR STREET BHIKANCHAND MARKET 1ST FLOOR NEAR TEA BOARD',
    phone: '+91 8777016200',
    email: 'contact@ihrcwb.org',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.238331320624!2d88.3531188154101!3d22.57021173859669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f8a7e44449%3A0x5df774caef4316d!2sOld%20China%20Bazar%20St%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1716492318859!5m2!1sen!2sin',
  },
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  },
  headquarters: [
      { location: 'US HEADQUARTERS', address: ['14/2 OLD CHINA BAZAR STREET', 'BHIKANCHAND MARKET 1ST FLOOR', 'NEAR TEA BOARD'], phone: '8777016200'},
      { location: 'SWITZERLAND HEADQUARTERS', address: ['31 Rue Vollandes, 1207 Genèva,', 'Switzerland'], phone: '+41779664839', email: 'info@ihrc-geneve.org'},
      { location: 'INDIA HEADQUARTERS', address: ['154 Raj Chambers, Alibhai Premji Marg,', 'Grant Road, Mumbai-400007'] }
  ]
};

const MOCK_ABOUT_PAGE_CONTENT = {
    header: {
        title: 'About Us',
        bgImage: 'https://wbhrc.netlify.app/assets/about-bg-880927c8.jpg'
    },
    whoWeAre: {
        title: 'Who We Are',
        paragraph1: 'International Human Rights Council is one of the world’s leading independent organizations dedicated to defending and protecting human rights. By focusing international attention where human rights are violated, we give voice to the oppressed and hold oppressors accountable for their crimes.',
        paragraph2: 'Our rigorous, objective investigations and strategic, targeted advocacy build intense pressure for action and raise the cost of human rights abuse. For years, IHRC has worked tenaciously to lay the legal and moral groundwork for deep-rooted change and has fought to bring greater justice and security to people around the world.',
        imageUrl: 'https://wbhrc.netlify.app/assets/welcome-79774681.jpg'
    },
    vision: {
        title: 'Our Vision',
        text: 'To create a society in West Bengal where human rights are valued and upheld, where every person can achieve their full potential in an environment of peace, equality, and justice.'
    },
    mission: {
        title: 'Our Mission',
        text: 'Our mission is to work for the protection and promotion of human rights for all, with a focus on empowering marginalized communities, advocating for policy reform, and ensuring access to justice for victims of human rights violations.'
    },
    objectives: {
        title: 'Our Objectives',
        // FIX: Added missing 'subtitle' property to match the ObjectivesContent interface.
        subtitle: 'Our commitment to upholding human dignity and justice.',
        list: [
          "To promote and protect human rights and fundamental freedoms for all.",
          "To work for the rights of women, children, and marginalized communities.",
          "To advocate for policy changes to strengthen human rights protections.",
          "To provide legal aid and support to victims of human rights violations.",
          "To conduct research and document human rights abuses.",
          "To raise awareness and educate the public about human rights issues."
        ]
      }
};

const MOCK_EVENTS = [
  { img: 'https://wbhrc.netlify.app/assets/event-1-9a7444c9.jpg', title: 'Human Rights Day Celebration', date: '10th December 2023', description: 'Celebrating the universal declaration of human rights with talks and cultural events. We brought together activists, students, and community leaders to reflect on our progress and the challenges ahead.' },
  { img: 'https://wbhrc.netlify.app/assets/event-2-3652c00c.jpg', title: 'Legal Aid Camp for Women', date: '15th November 2023', description: 'Providing free legal consultation and support to women in need. Our team of volunteer lawyers helped address issues of domestic violence, property rights, and more.' },
  { img: 'https://wbhrc.netlify.app/assets/event-3-22f3e8b0.jpg', title: 'Youth for Human Rights Workshop', date: '22nd October 2023', description: 'Engaging young minds to become advocates for human rights in their communities. The workshop included interactive sessions on identifying and reporting human rights violations.' },
];

// --- API FUNCTIONS ---

export const getSiteData = async () => {
  await sleep(100);
  return MOCK_SITE_DATA;
};

export const getHomePageData = async () => {
  await sleep(500);
  return {
    heroSlides: [
        { image: "https://wbhrc.netlify.app/assets/hero-1-246197f2.jpg", subtitle: "Welcome to IHRCWB", title: "Right to Education, Right to Life", description: "Education is a fundamental human right and essential for the exercise of all other human rights." },
        { image: "https://wbhrc.netlify.app/assets/hero-2-a1f94291.jpg", subtitle: "Support Us", title: "Your Help Can Make a Difference", description: "Join us in our mission to protect and promote human rights for everyone, everywhere." },
        { image: "https://wbhrc.netlify.app/assets/hero-3-ccb387e7.jpg", subtitle: "Get Involved", title: "Become a Member Today", description: "Be a part of a global movement standing up for justice, equality, and dignity." }
    ],
    content: {
        welcome: { title: 'Welcome to IHRCWB', paragraph1: 'International Human Rights Council is one of the world’s leading independent organizations dedicated to defending and protecting human rights for all.', paragraph2: 'Our purpose is to make a significant and lasting contribution to the promotion and protection of human rights worldwide.', imageUrl: 'https://wbhrc.netlify.app/assets/welcome-79774681.jpg' },
        objectives: MOCK_ABOUT_PAGE_CONTENT.objectives,
        cta: { title: 'Become a Member', text: 'Join our cause and be a part of the change. Your membership supports our work and strengthens our voice in the fight for human rights.', buttonText: 'Join Today', buttonLink: '#/get-involved' }
    },
    latestEvents: MOCK_EVENTS,
    teamPreview: MOCK_MEMBERS.national.slice(0, 4),
  };
};

export const getAboutPageData = async () => {
    await sleep(300);
    return MOCK_ABOUT_PAGE_CONTENT;
};

export const getAllMembers = async () => {
    await sleep(400);
    return MOCK_MEMBERS;
};

export const getAllEvents = async () => {
    await sleep(400);
    return [
        ...MOCK_EVENTS,
        { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', title: 'Seminar on Environmental Rights', date: '5th September 2023', description: 'A discussion on the intersection of climate change and human rights, focusing on the right to a clean and healthy environment for all.' },
        { img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop', title: 'Fundraising Gala Dinner', date: '12th August 2023', description: 'An evening dedicated to raising funds for our upcoming projects and honoring the contributions of our most dedicated volunteers and sponsors.' },
        { img: 'https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop', title: 'Press Conference on Prison Reforms', date: '20th July 2023', description: 'Addressing the media to highlight the findings of our recent report on prison conditions and to advocate for urgent reforms.' },
    ];
};

export const getHowWeWorkPageData = async () => {
    await sleep(300);
    return {
        header: {
            title: 'How We Work',
            bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
        },
        sections: [
            { title: 'Communications and Publications', content: 'IHRC publishes ‘know your rights’ material including books, reports and posters. These publications aim to simplify and make accessible important developments in human rights and law in India. Researched by our experienced team of lawyers and activists, the publications are a valuable resource for lawyers, activists, judges, academics, researchers, concerned individuals, the media and educational institutions.' },
            { title: 'Union or Consolidations of Interests', content: 'IHRC adopts an internationalist approach. There cannot be human rights in country if they are threatened in neighbouring countries of the region. Further, as rights are indivisible, so are they deeply linked? Child rights cannot be secured without the rights to food, education, shelter, and health being ensured. IHRC is shoulder-to-shoulder with national and international initiatives for peace, rule of law and democracy.' },
            { title: 'Campaigns', content: 'There is today a direct link between the public interest petitions done by IHRC and the campaigns it participates in and convenes. The latter create awareness about the issues, facilitate the dissemination of the orders passed by the courts, and make the process for change participatory. This tells the judiciary that society is concerned about the outcome of the cases, and therefore makes the judiciary more responsive to the needs of civil society.' },
            { title: 'Counseling', content: 'In courts, in the media, and in various public and legislative for a, IHRC is a strong advocate for laws and policies that promote and defend human rights. An important part of IHRC work involves advocacy against legislation and policies that undermine human rights. This includes working to increase public awareness through research and dissemination of accurate information on violations and anti-poor policies.' },
            { title: 'Education', content: 'Asserting everyone’s right to access and everyone’s ability to understand the law – we attempt to demystify legal terms, concepts and procedures so that everyone, especially those neglected by the system of justice can find themselves more included. To do this, IHRC, takes legal education as a mission. It continuously campaigns to broad constituencies for better understanding about the law and the judicial system.' },
            { title: 'Legal Aid and Public Interest Litigation', content: 'The nationwide network offers quick response and pro bono expertise to those who have little or no access to the justice system. Lawyers offer legal representation and advice to people who cannot afford legal representation. Over the past decade, the Channel has made a critical transition from individual litigation in the lower courts to filing public interest petitions in the High Courts and in the Supreme Court.' },
        ]
    };
};

export const getGetInvolvedPageData = async () => {
    await sleep(300);
    return {
        header: {
            title: 'Get Involved',
            bgImage: 'https://images.unsplash.com/photo-1521790797524-b24948834546?q=80&w=2070&auto=format&fit=crop'
        },
        intro: {
            title: 'Be a part of our team',
            text: 'Inform people, widen our network, and help us to organize collection camps. If you can spare some time, wherever you are you can spread awareness even on the phone/email. Talk to your colleagues, friends, neighbours and relatives about IHRC work.'
        },
        sections: [
            { title: 'Potential Sponsor', content: 'Sponsor our camps, events, products and administrative expenditure. We appeal to any individual/organization that would like to help us out.' },
            { title: 'Doctor', content: 'Give us a few of your extra medicines/samples for distribution among those who cannot afford them but need them.' },
            { title: 'IT Professional', content: 'Take out a little time and share your knowledge with us. Guide us in managing our database and strengthening our administrative systems.' },
            { title: 'Book Lover', content: 'Explore our vast medley of second-hand books and help us raise funds. You can also donate your old books for this purpose.' },
            { title: 'An Organization/Corporate', content: 'Motivate your employees/colleagues to join in our efforts. Initiate a collection drive in your organization where employees can bring in their unwanted but re-usable material for IHRC.' },
            { title: 'Business House/Exporter', content: 'Instead of throwing away non-saleable/surplus material, you can give it to IHRC. We re-use and re-distribute this or sell it to raise funds.' },
            { title: 'NGO', content: 'Help us to reach people in need of support across the country. Join us as partner.' },
            { title: 'Media Person', content: 'For a greater impact, reaching out to the right people is a must; you can help us here simply by accessing your network!' },
        ],
        cta: {
            title: 'Support Matters',
            text: 'Your generous support empowers our mission to make a lasting impact in our community. You can help by sponsoring activities, donating material, or providing infrastructural support like office and storage space.'
        }
    };
};