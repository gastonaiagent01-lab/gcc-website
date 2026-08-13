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

const tenantPlaceholders = Array.from({ length: 4 }, () => ({
  name: '[Q3 — Tenant name TBD]',
  type: '[Organization type]',
}));

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
            {tenantPlaceholders.map((tenant, i) => (
              <div key={i} className="fog-tenant-card">
                <div className="fog-tenant-logo" />
                <p className="fog-tenant-name">{tenant.name}</p>
                <p className="fog-tenant-type">{tenant.type}</p>
              </div>
            ))}
          </div>
          <p className="fog-tenants-note">
            [Q3 — Full tenant list pending directory data from board]
          </p>
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

      <section className="fog-social">
        <div className="container fog-social-inner">
          <h2 className="fog-social-title">Follow Our Story</h2>
          <p className="fog-social-subtitle">
            [Q3 — Social handles pending] Connect with us on Facebook, Instagram, and LinkedIn.
          </p>
          <div className="fog-social-links">
            <span className="fog-social-link">Facebook</span>
            <span className="fog-social-link">Instagram</span>
            <span className="fog-social-link">LinkedIn</span>
          </div>
        </div>
      </section>
    </>
  );
}
