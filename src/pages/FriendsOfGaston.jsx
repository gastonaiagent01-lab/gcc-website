import './FriendsOfGaston.css';

const benefits = [
  'A quarterly donor email update.',
  'Invitations to community events and other GCC gatherings.',
  "Feel-good feelings — when you know you're helping people, it's hard not to smile.",
];

const valueProps = [
  {
    title: 'Provides Predictable, Stable Income',
    description:
      'Monthly donations offer a reliable stream of revenue, helping GCC better forecast budgets, plan programs, and manage resources. This consistency reduces financial uncertainty and allows for more strategic long-term planning.',
  },
  {
    title: 'Convenience and Ease',
    description:
      'Setting up a recurring monthly donation is simple and automatic, eliminating the need to remember to give each month. This convenience makes it easier to stay committed and reduces the hassle of repeated transactions.',
  },
  {
    title: 'Long-Term Commitment to Change',
    description:
      'By becoming a monthly donor, you demonstrate a deep, ongoing commitment to the cause. Real change takes time, and your sustained support ensures GCC can continue its work and make a lasting difference in the community.',
  },
];

const monthlyImpact = [
  {
    amount: '$10',
    title: 'Light a Room',
    description: 'Helps power and light a shared room for a week.',
  },
  {
    amount: '$25',
    title: 'Support a Seat',
    description: "Covers utilities for one regular community member's weekly use.",
  },
  {
    amount: '$50',
    title: 'Sustain a Space',
    description: 'Offsets monthly utilities for a small suite or office.',
  },
  {
    amount: '$100',
    title: 'Empower a Ministry',
    description: 'Helps subsidize rent + utilities for a nonprofit or congregation.',
  },
  {
    amount: '$250',
    title: 'Bless a Wing',
    description:
      "Supports a wing's operational costs such as electricity, HVAC, water, janitorial services, and shared costs.",
  },
];

const communityOrgs = [
  {
    name: 'Gateway of Grace',
    type: 'Community Partner',
    link: 'https://www.gatewayofgrace.org/',
    logo: '/images/live/tenants/gateway-of-grace.webp',
  },
  {
    name: 'Full Circle Bakery',
    type: 'Community Partner',
    link: 'https://www.fullcircletexas.com/',
    logo: '/images/live/tenants/full-circle-bakery.webp',
  },
  {
    name: 'Bethesda Hope Ministries',
    type: 'Community Partner',
    link: 'https://www.bethesdahopeministries.org/',
    logo: '/images/live/tenants/bethesda-hope-ministries.webp',
  },
  {
    name: 'Bakke Graduate University',
    type: 'Community Partner',
    link: 'https://bgu.edu/',
    logo: '/images/live/tenants/bakke-graduate-university.webp',
  },
  {
    name: 'Baptist News Global',
    type: 'Community Partner',
    link: 'https://baptistnews.com/more/about/',
    logo: '/images/live/tenants/baptist-news-global.webp',
  },
  {
    name: 'HHM Health - Dental Office',
    type: 'Community Partner',
    link: 'https://www.hhmhealth.org/dental/',
    logo: '/images/live/tenants/hhm-health-dental-office.webp',
  },
  {
    name: 'Kids U',
    type: 'Community Partner',
    link: 'https://kids-u.org/',
    logo: '/images/live/tenants/kids-u.webp',
  },
  {
    name: 'Light of Hope Immigration Law Center',
    type: 'Community Partner',
    link: 'https://www.lohimmigration.org/index.html',
    logo: '/images/live/tenants/light-of-hope-immigration-law-center.webp',
  },
  {
    name: 'Friends of MLK',
    type: 'Community Partner',
    link: 'https://friendsofmlk.org/',
    logo: '/images/live/tenants/friends-of-mlk.webp',
  },
  {
    name: 'Literacy ConneXus',
    type: 'Community Partner',
    link: 'https://www.literacyconnexus.org/',
    logo: '/images/live/tenants/literacy-connexus.webp',
  },
  {
    name: 'Familia de la Fe',
    type: 'Congregation',
    link: 'https://www.facebook.com/people/Familia-De-La-Fe/61575699068916/#',
    logo: '/images/live/tenants/familia-de-la-fe.webp',
  },
  {
    name: 'Full Gospel Assembly International Ministry',
    type: 'Congregation',
    link: 'https://www.facebook.com/fgaimdallas/',
    logo: '/images/live/tenants/full-gospel-assembly-international-ministry.webp',
  },
  {
    name: 'Agape Baptist Church',
    type: 'Congregation',
    link: 'https://www.facebook.com/agapebcdallas/',
    logo: '/images/live/tenants/agape-baptist-church.webp',
  },
  {
    name: 'Iglesia INNOVA',
    type: 'Congregation',
    link: 'https://www.facebook.com/healinghandscchurch/',
    logo: '/images/live/tenants/iglesia-innova.webp',
  },
  {
    name: 'Hope Outreach & Integration Ministries International',
    type: 'Congregation',
    link: 'mailto:ksimisi@yahoo.com?subject=Inquiry',
    logo: '/images/live/tenants/hope-outreach-integration-ministries-international.webp',
  },
  {
    name: 'Iglesia Bautista La Promesa',
    type: 'Congregation',
    link: 'mailto:ricespinal@yahoo?subject=Church%20Inquiry',
    logo: '/images/live/tenants/iglesia-bautista-la-promesa.webp',
  },
  {
    name: 'Gaston Oaks Baptist Church',
    type: 'Congregation',
    link: 'https://www.facebook.com/profile.php?id=61564036615704',
    logo: '/images/live/tenants/gaston-oaks-baptist-church.webp',
  },
  {
    name: 'Centro Cristiano Biblico Metroplex',
    type: 'Congregation',
    link: 'mailto:jalmanza214@yahoo.com?subject=Church%20Inquiry',
    logo: '/images/live/tenants/centro-cristiano-biblico-metroplex.webp',
  },
  {
    name: 'African Fellowship Church',
    type: 'Congregation',
    link: 'mailto:patricknyanda14@gmail.com?subject=Church%20Inquiry',
    logo: '/images/live/tenants/african-fellowship-church.webp',
  },
];

const waysToHelp = [
  {
    title: 'Lease a Space',
    description: 'Apply to become a tenant and join our community of mission-driven organizations.',
  },
  {
    title: 'Give a Gift',
    description: 'Financial donations directly support subsidized space and community programs.',
  },
  {
    title: 'Volunteer',
    description: 'Share your skills and time with our programs and initiatives.',
  },
  {
    title: 'Refer an Org',
    description: 'Know a nonprofit or ministry that needs affordable space? Send them our way.',
  },
];

export default function FriendsOfGaston() {
  return (
    <>
      <section className="fog-hero">
        <div className="container">
          <p className="eyebrow fog-hero-eyebrow">Monthly Giving</p>
          <h1 className="fog-hero-title">Friends of Gaston</h1>
          <p className="fog-hero-subtitle">
            A monthly giving movement of Friends who help sustain Gaston Christian Center — room
            by room, light by light, life by life.
          </p>
        </div>
      </section>

      <section className="fog-photo-intro">
        <div className="container fog-photo-intro-inner">
          <p className="fog-photo-intro-body">
            Friends of Gaston is a monthly giving movement composed of passionate community
            members who help sustain the Gaston Christian Center — room by room, light by light,
            life by life.
          </p>

          <div className="fog-benefits">
            <p className="fog-benefits-title">Friends of Gaston receive:</p>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <a href="#give" className="btn btn-primary fog-give-btn">
            Give Monthly
          </a>
        </div>
      </section>

      <section className="fog-why">
        <div className="container">
          <p className="eyebrow fog-why-eyebrow">The Impact</p>
          <h2 className="fog-why-title">Why Monthly Giving Matters</h2>
          <div className="fog-value-grid">
            {valueProps.map((prop) => (
              <div key={prop.title} className="fog-value-card">
                <p className="fog-value-card-title">{prop.title}</p>
                <p className="fog-value-card-description">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fog-give-section" id="give">
        <div className="container">
          <p className="eyebrow fog-give-eyebrow">Recurring Monthly Gift</p>
          <h2 className="fog-give-title">Choose Your Monthly Gift</h2>
          <p className="fog-give-subtitle">
            Every gift below renews automatically each month — pick an amount that fits your
            budget and helps GCC plan ahead with confidence.
          </p>
          <span className="fog-recurring-badge">&#x21bb; Recurring donation — renews monthly</span>

          <div className="fog-give-grid">
            {monthlyImpact.map((item) => (
              <div key={item.amount} className="fog-give-card">
                <p className="fog-give-card-amount">{item.amount}</p>
                <p className="fog-give-card-title">{item.title}</p>
                <p className="fog-give-card-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="fog-give-embed-note">
            GiveButter donation form embeds here (account: OvV8eRSSJod8OvPn), pre-set to a
            recurring monthly gift. Needs the real embed snippet from GiveButter before this goes
            live.
          </div>

          <p className="fog-processor-note">
            Donations are processed securely through our partner in fundraising, GiveButter
            (givebutter.com).
          </p>
        </div>
      </section>

      <section className="fog-tenants">
        <div className="container">
          <p className="eyebrow fog-tenants-eyebrow">Current Tenants</p>
          <h2 className="fog-tenants-title">Organizations in Our Community</h2>
          <p className="fog-tenants-intro">
            The following organizations call Gaston Christian Center home. Each one is doing
            important work for Dallas families.
          </p>
          <div className="fog-tenant-grid">
            {communityOrgs.map((org) => (
              <a
                key={org.name}
                href={org.link}
                className="fog-tenant-card"
                target={org.link.startsWith('mailto:') ? undefined : '_blank'}
                rel={org.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              >
                <img className="fog-tenant-logo" src={org.logo} alt={`${org.name} logo`} />
                <p className="fog-tenant-name">{org.name}</p>
                <p className="fog-tenant-type">{org.type}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="fog-become">
        <div className="container">
          <p className="eyebrow fog-become-eyebrow">Get Involved</p>
          <h2 className="fog-become-title">Become a Friend of Gaston</h2>
          <div className="fog-way-grid">
            {waysToHelp.map((way) => (
              <div key={way.title} className="fog-way-card">
                <p className="fog-way-card-title">{way.title}</p>
                <p className="fog-way-card-description">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
