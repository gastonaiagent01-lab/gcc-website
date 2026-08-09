// Copy for the four "Find Your Space" detail pages, pulled from Figma file 03
// (nodes 31:2 Medical, 31:96 Office, 31:190 Event, 31:284 Church). Any
// [CONFIRM]/[COPY NEEDED] tag mirrors an open Figma design note (GAS-6/GAS-7
// audit) — keep the tag visible in copy until GCC/CEO resolves it, don't
// invent the missing fact.

export const medicalSpaces = {
  eyebrow: 'Healthcare & Wellness Spaces',
  titleLines: ['Medical & Clinical Spaces'],
  subtitle:
    'Purpose-built clinical suites for health ministries, FQHCs, and community health organizations. Suite North 100 — 25+ rooms purpose-built for clinical operations. [CONFIRM — ADA compliance and telehealth language with GCC; Q17/Q18]',
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
      description:
        '16 fully equipped exam rooms — [CONFIRM — ADA compliance; see Q17]. Includes doctor consultation rooms, staff break room, and analysis room.',
    },
    {
      title: 'Waiting Area',
      description: 'Shared patient waiting area with reception access.',
    },
    {
      title: 'Telehealth Ready',
      description:
        '[CONFIRM — telehealth capability not stated on live site; verify with GCC before publishing. Q18]',
    },
    {
      title: 'Accessible Entry',
      description: 'Wheelchair-accessible entrance, restrooms, and hallways throughout.',
    },
  ],
  amenitiesEyebrow: 'Amenities',
  amenitiesTitle: 'Everything You Need',
  amenityColumns: [
    [
      'High-speed internet',
      'HVAC climate control',
      'Private parking',
      'ADA-accessible entrance and restrooms',
    ],
    ['Shared patient waiting area', 'Flexible lease terms', 'On-site janitorial'],
  ],
  ctaSubtitle:
    'Schedule a tour or submit an inquiry — our team responds promptly [CONFIRM — response time SLA; see Q19].',
};

export const officeSpace = {
  eyebrow: 'Administrative & Nonprofit Offices',
  titleLines: ['Office Space for', 'Mission-Driven Orgs'],
  subtitle:
    'Private offices and open work areas for nonprofits, ministries, and community organizations at rates that protect your mission budget.',
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
  amenitiesEyebrow: 'Amenities [CONFIRM — items below not stated on live /tenant page; verify with GCC before publishing — Q21]',
  amenitiesTitle: 'Everything You Need',
  amenityColumns: [
    ['High-speed internet', 'Printing and copying', 'Conference room access', 'Private parking'],
    ['Kitchenette access', 'Mail and package handling', 'Flexible lease terms'],
  ],
  ctaSubtitle: 'Schedule a tour or submit an inquiry — our team responds within one business day.',
};

export const eventSpace = {
  eyebrow: 'Gatherings, Events & Programs',
  titleLines: ['Event & Meeting Spaces'],
  subtitle:
    'Flexible hall and classroom space for community events, workshops, ministry programs, and special gatherings.',
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
  ctaSubtitle:
    'Schedule a tour or submit an inquiry — our team responds promptly [CONFIRM — response time; see Q19].',
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
  ctaSubtitle:
    'Schedule a tour or submit an inquiry — our team responds promptly [CONFIRM — response time; see Q19].',
};
