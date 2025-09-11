import { createClient, ContentfulClientApi, Entry } from 'contentful';
import { contentfulConfig } from '../config';

// Initialize the Contentful client
const client: ContentfulClientApi = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.accessToken,
});

// --- HELPER FUNCTIONS to safely transform Contentful entries ---

const transformImage = (imageField: any): string => {
  return imageField?.fields?.file?.url ? `https:${imageField.fields.file.url}` : '';
};

const transformSiteSettings = (entry: Entry<any>): any => {
    const fields = entry.fields;
    return {
        logoUrl: transformImage(fields.logo),
        contactInfo: {
            address: fields.contactAddress || '',
            phone: fields.contactPhone || '',
            email: fields.contactEmail || '',
            mapUrl: fields.mapUrl || '',
        },
        socialLinks: {
            facebook: fields.facebookUrl || '#',
            instagram: fields.instagramUrl || '#',
            twitter: fields.twitterUrl || '#',
            linkedin: fields.linkedinUrl || '#',
        },
        headquarters: [
            { location: 'US HEADQUARTERS', address: (fields.usHeadquarters as string)?.split('\n') || [], phone: fields.usPhone || '', email: fields.usEmail || '' },
            { location: 'SWITZERLAND HEADQUARTERS', address: (fields.switzerlandHeadquarters as string)?.split('\n') || [], phone: fields.switzerlandPhone || '', email: fields.switzerlandEmail || '' },
            { location: 'INDIA HEADQUARTERS', address: (fields.indiaHeadquarters as string)?.split('\n') || [], phone: fields.indiaPhone || '', email: fields.indiaEmail || '' },
        ].filter(hq => hq.address.length > 0)
    };
};

const transformHeroSlide = (entry: Entry<any>): any => ({
  image: transformImage(entry.fields.image),
  subtitle: entry.fields.subtitle || '',
  title: entry.fields.title || '',
  description: entry.fields.description || '',
});

const transformMember = (entry: Entry<any>): any => ({
    img: transformImage(entry.fields.photo) || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    name: entry.fields.name || 'N/A',
    title: entry.fields.title || 'N/A',
    body: entry.fields.body || 'National', // 'National' or 'West Bengal'
});

const transformEvent = (entry: Entry<any>): any => ({
    img: transformImage(entry.fields.image) || 'https://wbhrc.netlify.app/assets/event-placeholder.jpg',
    title: entry.fields.title || 'Untitled Event',
    date: entry.fields.date ? new Date(entry.fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Date TBD',
    description: entry.fields.description || 'No description available.',
});

const transformContentSection = (entry: Entry<any>): any => ({
    title: entry.fields.title || '',
    content: entry.fields.content || '',
});


// --- API FUNCTIONS ---

// Fetch Site Settings (logo, contact, socials)
// Assumes a SINGLE entry of content type 'siteSettings'
export const getSiteData = async () => {
  const entries = await client.getEntries({ content_type: 'siteSettings', limit: 1 });
  if (entries.items.length > 0) {
    return transformSiteSettings(entries.items[0]);
  }
  throw new Error("Site settings not found in Contentful.");
};

// Fetch all data for the Home Page
// Assumes a SINGLE entry of content type 'pageHome'
export const getHomePageData = async () => {
    const entries = await client.getEntries({ content_type: 'pageHome', include: 2 });
    if (!entries.items.length) throw new Error("Home page data not found.");

    const page = entries.items[0].fields;
    return {
        heroSlides: (page.heroSlides as Entry<any>[])?.map(transformHeroSlide) || [],
        content: {
            welcome: {
                title: page.welcomeTitle || '',
                paragraph1: page.welcomeParagraph1 || '',
                paragraph2: page.welcomeParagraph2 || '',
                imageUrl: transformImage(page.welcomeImage),
            },
            objectives: {
                title: page.objectivesTitle || 'Our Objectives',
                subtitle: page.objectivesSubtitle || '',
                list: page.objectivesList || [],
            },
            cta: {
                title: page.ctaTitle || '',
                text: page.ctaText || '',
                buttonText: page.ctaButtonText || 'Learn More',
                buttonLink: page.ctaButtonLink || '#',
            }
        },
        latestEvents: (page.latestEvents as Entry<any>[])?.map(transformEvent) || [],
        teamPreview: (page.teamPreview as Entry<any>[])?.map(transformMember) || [],
    };
};

// Fetch all data for the About Page
// Assumes a SINGLE entry of content type 'pageAbout'
export const getAboutPageData = async () => {
    const entries = await client.getEntries({ content_type: 'pageAbout', limit: 1 });
    if (!entries.items.length) throw new Error("About page data not found.");

    const page = entries.items[0].fields;
    return {
        header: { title: page.headerTitle || 'About Us', bgImage: transformImage(page.headerBgImage) },
        whoWeAre: {
            title: page.whoWeAreTitle || '',
            paragraph1: page.whoWeAreParagraph1 || '',
            paragraph2: page.whoWeAreParagraph2 || '',
            imageUrl: transformImage(page.whoWeAreImage),
        },
        vision: { title: page.visionTitle || 'Our Vision', text: page.visionText || '' },
        mission: { title: page.missionTitle || 'Our Mission', text: page.missionText || '' },
        objectives: {
            title: page.objectivesTitle || 'Our Objectives',
            list: page.objectivesList || [],
        },
    };
};

// Fetch all Members and group them
// Assumes content type 'member' with a 'body' field ('National' or 'West Bengal')
export const getAllMembers = async () => {
    const entries = await client.getEntries({ content_type: 'member', order: 'fields.name' });
    const allMembers = entries.items.map(transformMember);
    return {
        national: allMembers.filter(m => m.body === 'National'),
        westBengal: allMembers.filter(m => m.body === 'West Bengal'),
    };
};

// Fetch all Events
// Assumes content type 'event'
export const getAllEvents = async () => {
    const entries = await client.getEntries({ content_type: 'event', order: '-fields.date' });
    return entries.items.map(transformEvent);
};

// Fetch data for How We Work Page
// Assumes a SINGLE entry of content type 'pageHowWeWork'
export const getHowWeWorkPageData = async () => {
    const entries = await client.getEntries({ content_type: 'pageHowWeWork', limit: 1, include: 1 });
    if (!entries.items.length) throw new Error("How We Work page data not found.");
    
    const page = entries.items[0].fields;
    return {
        header: { title: page.headerTitle || 'How We Work', bgImage: transformImage(page.headerBgImage) },
        sections: (page.sections as Entry<any>[])?.map(transformContentSection) || [],
        slideshowImages: (page.slideshowImages as any[])?.map(transformImage) || [],
    };
};

// Fetch data for Get Involved Page
// Assumes a SINGLE entry of content type 'pageGetInvolved'
export const getGetInvolvedPageData = async () => {
    const entries = await client.getEntries({ content_type: 'pageGetInvolved', limit: 1, include: 1 });
    if (!entries.items.length) throw new Error("Get Involved page data not found.");

    const page = entries.items[0].fields;
    return {
        header: { title: page.headerTitle || 'Get Involved', bgImage: transformImage(page.headerBgImage) },
        intro: { title: page.introTitle || '', text: page.introText || '' },
        sections: (page.sections as Entry<any>[])?.map(transformContentSection) || [],
        cta: { title: page.ctaTitle || '', text: page.ctaText || '' },
    };
};

// Fetch all images for the gallery
// Assumes content type 'galleryImage'
export const getGalleryImages = async () => {
    const entries = await client.getEntries({ content_type: 'galleryImage', order: '-sys.createdAt' });
    return entries.items.map(item => ({
        id: item.sys.id,
        title: item.fields.title as string || 'Untitled',
        url: transformImage(item.fields.image),
        description: item.fields.description as string || '',
    }));
};
