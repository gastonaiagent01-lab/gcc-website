// Copy for the four "Find Your Space" detail pages, pulled from Figma file 03
// (nodes 31:2 Medical, 31:96 Office, 31:190 Event, 31:284 Church).
//
// GAS-87 (2026-08-15): re-pulled copy directly from the live Squarespace site
// (gastonchristianctr.org/contactmed25, /tenant, /eventspace, /churchspace —
// curl'd raw HTML + meta descriptions, not the Figma export) and replaced
// every [CONFIRM]/[COPY NEEDED] tag that had a real answer there. Medical and
// Office had substantial real copy (suite highlights, pricing, amenities);
// Event and Church genuinely have almost no body copy on the live site — no
// capacity, dimensions, or amenities text anywhere in the HTML or meta tags —
// so those [COPY NEEDED] tags are left in place rather than invented.
// Any remaining tag mirrors a real gap on the live site — keep it visible
// until GCC/CEO supplies the copy, don't invent the missing fact.

export const medicalSpaces = {
  eyebrow: 'Healthcare & Wellness Spaces',
  titleLines: ['Medical & Clinical Spaces'],
  subtitle:
    "Gaston Christian Center is offering a rare opportunity to lease a large, fully built-out medical suite in Northeast Dallas. Suite North 100 features over 25 rooms purpose-built for clinical operations — ideal for a primary care clinic, specialty practice, dental office, behavioral health provider, or federally qualified health center (FQHC).",
  photos: [
    { src: '/images/live/medical-spaces-1.webp', alt: 'Nurse station in Suite Medical 25', caption: 'Nurse Station' },
    { src: '/images/live/medical-spaces-2.webp', alt: 'Workroom in Suite Medical 25', caption: 'Workroom' },
    { src: '/images/live/medical-spaces-3.webp', alt: 'Sample exam room in Suite Medical 25', caption: 'Exam Room' },
    { src: '/images/live/medical-spaces-4.webp', alt: 'Consulting room in Suite Medical 25', caption: 'Consulting' },
    { src: '/images/live/medical-spaces-5.webp', alt: 'Receiving area in Suite Medical 25', caption: 'Receiving' },
    { src: '/images/live/medical-spaces-6.webp', alt: 'Analysis room in Suite Medical 25', caption: 'Analysis' },
    { src: '/images/live/medical-spaces-7.webp', alt: 'Restroom in Suite Medical 25', caption: 'Restroom' },
    { src: '/images/live/medical-spaces-8.webp', alt: 'Staff breakroom in Suite Medical 25', caption: 'Staff Breakroom' },
    { src: '/images/live/medical-spaces-9.webp', alt: 'Team room in Suite Medical 25', caption: 'Team Room' },
  ],
  featuresEyebrow: "What's Included",
  featuresTitle: 'Space Features',
  features: [
    {
      title: 'Exam Rooms',
      description: '16 fully equipped exam rooms, plus a dedicated patient waiting area.',
    },
    {
      title: 'Consultation & Care',
      description: 'Doctor consultation rooms, a staff break room, and a dedicated analysis room.',
    },
    {
      title: 'Workroom & Storage',
      description: 'Dedicated workroom, receiving area, and secure storage.',
    },
    {
      title: 'Subsidized Pricing',
      description: 'Below-market, subsidized pricing for qualifying nonprofit health organizations.',
    },
  ],
  amenitiesEyebrow: 'Amenities',
  amenitiesTitle: 'Everything You Need',
  amenityColumns: [
    ['Utilities included', 'Flexible lease terms', 'Secure storage', 'On-site staff break room'],
    [
      'Centrally located near US-75 (Central Expressway)',
      'Close to Lake Highlands, Lakewood & Garland Road',
      'Patient waiting area',
      'Custom pricing quotes available',
    ],
  ],
  ctaSubtitle: 'Contact us today for a tour and custom pricing quote.',
};

export const officeSpace = {
  eyebrow: 'Administrative & Nonprofit Offices',
  titleLines: ['Office Space for', 'Mission-Driven Orgs'],
  subtitle:
    'Join a collaborative community of Christian nonprofits. Make a lasting impact in Dallas and beyond as your ministry or organization thrives with more affordable, centrally located offices.',
  photos: [
    { src: '/images/live/office-space-1.webp', alt: 'Suite North 206 office interior', caption: 'Suite North 206' },
    { src: '/images/live/office-space-2.webp', alt: 'Suite North 206 office interior', caption: 'Suite North 206' },
    { src: '/images/live/office-space-3.webp', alt: 'Suite North 208 office interior', caption: 'Suite North 208' },
    { src: '/images/live/office-space-4.webp', alt: 'Suite North 208 office interior', caption: 'Suite North 208' },
    { src: '/images/live/office-space-5.webp', alt: 'Suite North 207 office interior', caption: 'Suite North 207' },
    { src: '/images/live/office-space-6.webp', alt: 'Suite North 207 office interior', caption: 'Suite North 207' },
    { src: '/images/live/office-space-7.webp', alt: 'Suite North 210 office interior', caption: 'Suite North 210' },
    { src: '/images/live/office-space-8.webp', alt: 'Suite North 210 office interior', caption: 'Suite North 210' },
  ],
  featuresEyebrow: 'Available Options',
  featuresTitle: 'Available Suites',
  features: [
    {
      title: 'Suite North 206',
      href: 'https://www.gastonchristianctr.org/contactn206',
      description:
        '902 sq ft · $1,127/month (annual $13,530) · Subsidized nonprofit pricing. Three private offices, entrance/admin area, conference room, supply closet.',
    },
    {
      title: 'Suite North 208',
      href: 'https://www.gastonchristianctr.org/contactn208',
      description:
        '500 sq ft · $625/month (annual $7,500) · Subsidized nonprofit pricing. One large office, entrance/admin area, supply closet.',
    },
    {
      title: 'Suite North 207',
      href: 'https://www.gastonchristianctr.org/contactn207',
      description:
        'Contact for pricing — custom quote based on number of offices needed. Eight individual offices, adjacent space available, flexible configuration, room to expand, build-to-suit options.',
    },
    {
      title: 'Suite North 210',
      href: 'https://www.gastonchristianctr.org/contactn210',
      description:
        '882 sq ft · $1,103/month (annual $13,230) · Subsidized nonprofit pricing. Two private offices, entrance/admin area, professional layout, move-in ready, available now.',
    },
  ],
  amenitiesEyebrow: 'Amenities',
  amenitiesTitle: 'Everything You Need',
  amenityColumns: [
    [
      'Subsidized rent — save up to 60% off market rate',
      'Collaborative community of 20+ Christian ministries & nonprofits',
      'Utilities included (electricity, water, heating, cooling, maintenance)',
    ],
    [
      'Event space access at reduced or free rates',
      'Flexible terms — month-to-month, six-month, or annual leases',
    ],
  ],
  ctaSubtitle: 'Schedule a tour or submit an inquiry — our team will follow up with next steps.',
};

export const eventSpace = {
  eyebrow: 'Gatherings, Events & Programs',
  titleLines: ['Event & Meeting Spaces'],
  subtitle:
    "Book your event at Gaston Christian Center's versatile rental spaces — including Fellowship Hall and the Sanctuary — ideal for gatherings and celebrations in Dallas.",
  photos: [
    { src: '/images/live/event-space-1.webp', alt: 'Fellowship Hall set up for an event', caption: 'Fellowship Hall' },
    { src: '/images/live/event-space-2.webp', alt: 'Conference Room 106', caption: 'Conference Room 106' },
    { src: '/images/live/event-space-3.webp', alt: 'Sanctuary available for events', caption: 'Sanctuary' },
  ],
  featuresEyebrow: "What's Included",
  featuresTitle: 'Space Features',
  features: [
    {
      title: 'Fellowship Hall',
      description: '[COPY NEEDED — Fellowship Hall: capacity, room setup, dimensions; owner: GCC]',
    },
    {
      title: 'Conference Room 106',
      description: '[COPY NEEDED — Conference Room 106: capacity, room setup, dimensions; owner: GCC]',
    },
    {
      title: 'Sanctuary',
      description: '[COPY NEEDED — Sanctuary: capacity, room setup, dimensions; owner: GCC]',
    },
    {
      title: 'Catering Access',
      description: '[COPY NEEDED — catering/kitchen access details; owner: GCC]',
    },
  ],
  amenitiesEyebrow: 'Amenities',
  amenitiesTitle:
    'Everything You Need [CONFIRM — items below not verified on live /eventspace; owner: GCC — Q22]',
  amenityColumns: [
    ['Tables and chairs included', 'AV equipment and projector', 'Stage area', 'Accessible restrooms'],
    ['Parking for guests', 'Kitchen access', 'Half-day and full-day rental options'],
  ],
  ctaSubtitle: 'Schedule a tour or submit an inquiry — our team will follow up with next steps.',
};

export const churchSpace = {
  eyebrow: 'Worship & Fellowship Spaces',
  titleLines: ['Church & Worship Spaces'],
  subtitle:
    'Dedicated sanctuary and fellowship space for congregations of all sizes — a spiritual home for churches rooted in Dallas.',
  photos: [
    { src: '/images/live/church-space-1.webp', alt: 'Sanctuary at Gaston Christian Center' },
    { src: '/images/live/church-space-2.webp', alt: 'Worship space at Gaston Christian Center' },
  ],
  featuresEyebrow: "What's Included",
  featuresTitle: 'Space Features',
  features: [
    { title: 'Sanctuary', description: '[COPY NEEDED — Sanctuary capacity; owner: GCC]' },
    {
      title: 'Fellowship Hall',
      description: '[COPY NEEDED — Fellowship Hall: capacity, use policy; owner: GCC]',
    },
    {
      title: "Children's Ministry",
      description: "[COPY NEEDED — Children's Ministry: room count, capacity; owner: GCC]",
    },
    {
      title: 'Baptistry Available',
      description: '[COPY NEEDED — Baptistry: availability, scheduling process; owner: GCC]',
    },
  ],
  amenitiesEyebrow: 'Amenities',
  amenitiesTitle:
    'Everything You Need [CONFIRM — items below not verified on live /churchspace; owner: GCC — Q24]',
  amenityColumns: [
    ['Sound system', 'Worship lighting', 'Fellowship hall access', "Children's ministry rooms"],
    ['Parking', 'ADA-accessible entrance', 'Flexible Sunday and midweek scheduling'],
  ],
  ctaSubtitle: 'Schedule a tour or submit an inquiry — our team will follow up with next steps.',
};
