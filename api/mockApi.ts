// This file simulates a headless CMS API.
// Replace the mock data and functions with your actual CMS fetching logic.

// Simulate network delay to mimic real-world API calls
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- MOCK DATA ---
// In a real scenario, this data would come from your CMS.

const MOCK_SITE_DATA = {
  contactInfo: {
    address: 'Kolkata, West Bengal, India',
    phone: '+91 12345 67890',
    email: 'contact@ihrcwb.org',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.84922847294!2d88.18263158913381!3d22.53542732386708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700661642253!5m2!1sen!2sin',
  },
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  }
};

const MOCK_HERO_SLIDES = [
  {
    image: "https://wbhrc.netlify.app/assets/hero-1-246197f2.jpg",
    subtitle: "Welcome to IHRCWB",
    title: "Right to Education, Right to Life",
    description: "Education is a fundamental human right and essential for the exercise of all other human rights."
  },
  {
    image: "https://wbhrc.netlify.app/assets/hero-2-a1f94291.jpg",
    subtitle: "Support Us",
    title: "Your Help Can Make a Difference",
    description: "Join us in our mission to protect and promote human rights for everyone, everywhere."
  },
  {
    image: "https://wbhrc.netlify.app/assets/hero-3-ccb387e7.jpg",
    subtitle: "Get Involved",
    title: "Become a Member Today",
    description: "Be a part of a global movement standing up for justice, equality, and dignity."
  }
];

const MOCK_HOME_PAGE_CONTENT = {
  welcome: {
    title: 'Welcome to IHRCWB',
    paragraph1: 'International Human Rights Council is one of the world’s leading independent organizations dedicated to defending and protecting human rights for all.',
    paragraph2: 'Our purpose is to make a significant and lasting contribution to the promotion and protection of human rights worldwide. We work towards a world where everyone can live a life of dignity, freedom, and justice.',
    imageUrl: 'https://wbhrc.netlify.app/assets/welcome-79774681.jpg',
  },
  objectives: {
    title: 'Our Objectives',
    subtitle: 'Our commitment to upholding human dignity and justice.',
    list: [
      "To promote and protect human rights and fundamental freedoms for all.",
      "To work for the rights of women, children, and marginalized communities.",
      "To advocate for policy changes to strengthen human rights protections.",
      "To provide legal aid and support to victims of human rights violations.",
      "To conduct research and document human rights abuses.",
      "To raise awareness and educate the public about human rights issues."
    ]
  },
  cta: {
      title: 'Become a Member',
      text: 'Join our cause and be a part of the change. Your membership supports our work and strengthens our voice in the fight for human rights.',
      buttonText: 'Join Today',
      buttonLink: '#/contact',
  }
};

const MOCK_ABOUT_PAGE_CONTENT = {
    header: {
        title: 'About Us',
        bgImage: 'https://wbhrc.netlify.app/assets/about-bg-880927c8.jpg'
    },
    whoWeAre: {
        title: 'Who We Are',
        paragraph1: 'International Human Rights Council, West Bengal (IHRCWB) is a leading independent organization dedicated to defending and protecting human rights across the state and beyond. We are a passionate team of activists, lawyers, and volunteers committed to creating a world where every individual is treated with dignity and respect.',
        paragraph2: 'Our work is grounded in the principles of the Universal Declaration of Human Rights. We investigate abuses, expose the facts widely, and pressure those with power to respect rights and secure justice.',
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
    objectives: MOCK_HOME_PAGE_CONTENT.objectives
};

const MOCK_MEMBERS = [
    {
      img: 'https://wbhrc.netlify.app/assets/member-1-9f9b56f8.jpg',
      name: 'John Doe',
      title: 'President',
    },
    {
      img: 'https://wbhrc.netlify.app/assets/member-2-3b2d1033.jpg',
      name: 'Jane Smith',
      title: 'Vice President',
    },
    {
      img: 'https://wbhrc.netlify.app/assets/member-3-c8201a4e.jpg',
      name: 'Samuel Green',
      title: 'General Secretary',
    },
    {
      img: 'https://wbhrc.netlify.app/assets/member-4-8b63a419.jpg',
      name: 'Emily White',
      title: 'Treasurer',
    },
     {
      img: 'https://wbhrc.netlify.app/assets/member-5-ac286d9a.jpg',
      name: 'Michael Brown',
      title: 'Executive Member',
    },
    {
      img: 'https://wbhrc.netlify.app/assets/member-6-9f3731a5.jpg',
      name: 'Jessica Davis',
      title: 'Executive Member',
    },
    {
      img: 'https://wbhrc.netlify.app/assets/member-7-3532f41c.jpg',
      name: 'David Wilson',
      title: 'Legal Advisor',
    },
    {
      img: 'https://wbhrc.netlify.app/assets/member-8-91c6e1ab.jpg',
      name: 'Sarah Miller',
      title: 'Media Coordinator',
    },
];

const MOCK_EVENTS = [
  {
    img: 'https://wbhrc.netlify.app/assets/event-1-9a7444c9.jpg',
    title: 'Human Rights Day Celebration',
    date: '10th December 2023',
    description: 'Celebrating the universal declaration of human rights with talks and cultural events. We brought together activists, students, and community leaders to reflect on our progress and the challenges ahead.',
  },
  {
    img: 'https://wbhrc.netlify.app/assets/event-2-3652c00c.jpg',
    title: 'Legal Aid Camp for Women',
    date: '15th November 2023',
    description: 'Providing free legal consultation and support to women in need. Our team of volunteer lawyers helped address issues of domestic violence, property rights, and more.',
  },
  {
    img: 'https://wbhrc.netlify.app/assets/event-3-22f3e8b0.jpg',
    title: 'Youth for Human Rights Workshop',
    date: '22nd October 2023',
    description: 'Engaging young minds to become advocates for human rights in their communities. The workshop included interactive sessions on identifying and reporting human rights violations.',
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    title: 'Seminar on Environmental Rights',
    date: '5th September 2023',
    description: 'A discussion on the intersection of climate change and human rights, focusing on the right to a clean and healthy environment for all communities in West Bengal.',
  },
  {
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
    title: 'Fundraising Gala Dinner',
    date: '12th August 2023',
    description: 'An evening dedicated to raising funds for our upcoming projects and honoring the contributions of our most dedicated volunteers and sponsors.',
  },
  {
    img: 'https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop',
    title: 'Press Conference on Prison Reforms',
    date: '20th July 2023',
    description: 'Addressing the media to highlight the findings of our recent report on prison conditions and to advocate for urgent reforms to protect the rights of inmates.',
  },
];


// --- API FUNCTIONS ---
// Replace these functions with calls to your CMS.

export const getSiteData = async () => {
  await sleep(300); // Simulate API latency
  return MOCK_SITE_DATA;
};

export const getHomePageData = async () => {
  await sleep(800);
  return {
    heroSlides: MOCK_HERO_SLIDES,
    content: MOCK_HOME_PAGE_CONTENT,
    latestEvents: MOCK_EVENTS.slice(0, 3),
    teamPreview: MOCK_MEMBERS.slice(0, 4),
  };
};

export const getAboutPageData = async () => {
    await sleep(600);
    return MOCK_ABOUT_PAGE_CONTENT;
};

export const getAllMembers = async () => {
    await sleep(700);
    return MOCK_MEMBERS;
};

export const getAllEvents = async () => {
    await sleep(700);
    return MOCK_EVENTS;
};
