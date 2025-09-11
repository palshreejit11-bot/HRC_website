import { createClient, type Asset, type EntryCollection } from 'contentful';

// Create a Contentful client
// Keys are read from environment variables for security.
// These must be set in your hosting provider's settings (e.g., Netlify).
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

// --- HELPER FUNCTIONS TO PARSE CONTENTFUL RESPONSES ---

// Helper to parse an Asset from Contentful into a URL string
const parseAsset = (asset: Asset | undefined): string => {
  if (asset?.fields?.file?.url) {
    return `https:${asset.fields.file.url}`;
  }
  return '';
};

// Helper to parse a Member entry
const parseMember = (entry: any) => ({
  name: entry.fields.name || 'No Name',
  title: entry.fields.title || 'No Title',
  img: parseAsset(entry.fields.photo as Asset),
});

// Helper to parse an Event entry
const parseEvent = (entry: any) => ({
  title: entry.fields.title || 'No Title',
  date: entry.fields.date || 'No Date',
  description: entry.fields.description || '',
  img: parseAsset(entry.fields.image as Asset),
});

// Helper to parse Hero Slides from a list of assets
const parseHeroSlides = (assets: Asset[] | undefined) => {
    if (!assets) return [];
    // The text content for slides will be stored in the asset's title and description fields in Contentful
    // FIX: The `title` and `description` fields from Contentful can be objects
    // if multiple locales are used, which causes type errors.
    // This logic ensures we get a string value in all cases before using it.
    return assets.map(asset => {
        let description = asset.fields.description || '';
        if (typeof description === 'object') {
            description = Object.values(description)[0] || '';
        }
        
        let title = asset.fields.title || 'Title not set';
        if (typeof title === 'object') {
            title = Object.values(title)[0] || 'Title not set';
        }

        return {
            image: parseAsset(asset),
            title: title,
            subtitle: (description).split('|')[0] || 'Subtitle not set', // Using description for "subtitle|description"
            description: (description).split('|')[1] || 'Description not set',
        };
    });
};


// --- API FUNCTIONS ---

export const getSiteData = async () => {
  // In a real app, this could also be a global settings entry in Contentful
  return {
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
};

export const getHomePageData = async () => {
  const pageEntry = await client.getEntries({
    content_type: 'page',
    'fields.title': 'Home Page',
    include: 2, // Include linked assets
  });

  if (!pageEntry.items.length) {
    throw new Error("Home Page content not found in Contentful.");
  }
  
  const page = pageEntry.items[0];
  const content = page.fields.contentBlocks as any;

  const teamPreviewEntries = await client.getEntries({
      content_type: 'member',
      limit: 4,
  });

  const latestEventsEntries = await client.getEntries({
      content_type: 'event',
      limit: 3,
      order: ['-fields.date'],
  });

  return {
    heroSlides: parseHeroSlides(page.fields.heroSlides as Asset[]),
    content: {
        welcome: content.welcome,
        objectives: content.objectives,
        cta: content.cta,
    },
    latestEvents: latestEventsEntries.items.map(parseEvent),
    teamPreview: teamPreviewEntries.items.map(parseMember),
  };
};

export const getAboutPageData = async () => {
    const pageEntry = await client.getEntries({
        content_type: 'page',
        'fields.title': 'About Us Page',
        include: 1,
    });

    if (!pageEntry.items.length) {
        throw new Error("About Us Page content not found in Contentful.");
    }
    const page = pageEntry.items[0];
    const content = page.fields.contentBlocks as any;

    return {
        header: {
            title: content.header.title,
            bgImage: parseAsset(page.fields.featuredImage as Asset),
        },
        whoWeAre: {
          ...content.whoWeAre,
          imageUrl: parseAsset(content.whoWeAre.image as Asset),
        },
        vision: content.vision,
        mission: content.mission,
        objectives: content.objectives,
    };
};

export const getAllMembers = async () => {
  const entries: EntryCollection<any> = await client.getEntries({
    content_type: 'member',
    order: ['fields.name'],
  });
  return entries.items.map(parseMember);
};

export const getAllEvents = async () => {
  const entries: EntryCollection<any> = await client.getEntries({
    content_type: 'event',
    order: ['-fields.date'],
  });
  return entries.items.map(parseEvent);
};