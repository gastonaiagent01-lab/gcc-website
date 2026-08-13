import './Give.css';

const amounts = ['$10', '$25', '$55', '$100', '$250', '$500', '$1,000+'];

const impact = [
  { amount: '$10', description: "Lights a child's pre-school room." },
  {
    amount: '$25',
    description: 'Reserves a comfortable seat for a refugee child learning the English language.',
  },
  {
    amount: '$55',
    description: 'Helps offset the overhead cost of keeping a small nonprofit office warm or cool.',
  },
  {
    amount: '$100',
    description: 'Empowers a nonprofit or faith group to provide needed services to its community.',
  },
  {
    amount: '$250',
    description: 'Provides all utility services to a large nonprofit agency or ethnic church group.',
  },
  { amount: '$500', description: 'Aids in covering space and building maintenance for an entire floor.' },
  {
    amount: '$1,000+',
    description: "Serves as a foundation builder, helping sustain GCC's mission long-term.",
  },
];

const testimonials = [
  {
    quote:
      'The low-cost rent with utilities provided for our space has allowed us to keep our overhead low. This alone allows us to put more of our money into our programs. Also, I appreciate the group meetings with all the agencies who are part of the GCC family, affording us the opportunity to partner with other service-oriented agencies that benefit our surrounding community.',
    name: 'Diana Baker',
    role: 'CEO/Co-Founder, Kids U',
    initials: 'DB',
  },
  {
    quote:
      'GCC offers more than a space to rent; it provides practical support for ministry growth & is an epicenter of diverse ministries serving diverse communities.',
    name: 'Dennis Page',
    role: 'COO, Gateway of Grace',
    initials: 'DP',
  },
  {
    quote:
      'Being part of a community where churches & nonprofits can work together to love & serve the same community is unheard of. What happens in this place is special & amazing!',
    name: 'Jose Almanza',
    role: 'Pastor, Centro Cristiano Biblico Metroplex',
    initials: 'JA',
  },
];

const otherWays = [
  {
    title: 'Friends of Gaston',
    description:
      'Small Gifts, BIG Difference. Join our Monthly Giving Program and be part of a group of friends who share in the passion to help support nonprofits and ethnic congregations. Whether you give $5 or $100 monthly, your recurring gift helps provide a reliable and predictable source of income that helps GCC plan and budget for community outreach.',
  },
  {
    title: 'Legacy Giving',
    description:
      'Legacy giving is a powerful way to make a lasting difference by including Gaston Christian Center in your will or estate plans. Your enduring gift continues to support GCC, creating ripples of impact long after your lifetime.',
  },
  {
    title: 'Time',
    description:
      "Your time is valuable. We are looking for volunteers to work with our ethnic churches at our New Roots Program, and other community outreach events. We'll work with you to create a multicultural volunteer opportunity for your group or partner.",
  },
];

export default function Give() {
  return (
    <>
      <section className="give-hero">
        <div className="container">
          <p className="eyebrow give-hero-eyebrow">Support the Mission</p>
          <h1 className="give-hero-title">Give to Gaston Christian Center</h1>
          <p className="give-hero-subtitle">
            Your generosity makes it possible for GCC to continue providing subsidized,
            mission-aligned space to organizations serving Dallas families.
          </p>
        </div>
      </section>

      <section className="give-body">
        <div className="container give-columns">
          <div className="give-form">
            <p className="eyebrow give-form-eyebrow">Make a Gift</p>
            <h2 className="give-form-title">Choose Your Gift</h2>
            <div className="give-amount-row">
              {amounts.map((amount) => (
                <button key={amount} type="button" className="give-amount-btn">
                  {amount}
                </button>
              ))}
            </div>
            <div className="give-embed-note">
              GiveButter donation form embeds here (account: OvV8eRSSJod8OvPn). Donor selects an
              amount above and completes the gift without leaving the page — needs the real
              embed snippet from GiveButter before this goes live.
            </div>
          </div>
          <div className="give-impact">
            <p className="eyebrow give-impact-eyebrow">Why It Matters</p>
            <h2 className="give-impact-title">What Your Gift Makes Possible</h2>
            {impact.map((item) => (
              <div key={item.amount} className="give-impact-item">
                <p className="give-impact-amount">{item.amount}</p>
                <p className="give-impact-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="give-testimonials">
        <div className="container">
          <h2 className="give-testimonials-title">
            Make an <span className="give-testimonials-title-accent">impact</span> today
          </h2>
          <div className="give-testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="give-testimonials-card">
                <div className="give-testimonials-avatar">{item.initials}</div>
                <p className="give-testimonials-quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="give-testimonials-name">{item.name}</p>
                <p className="give-testimonials-role">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="give-other-ways" id="other-ways">
        <div className="container">
          <p className="eyebrow give-other-ways-eyebrow">More Ways to Help</p>
          <h2 className="give-other-ways-title">Other Ways to Give</h2>
          <div className="give-other-ways-grid">
            {otherWays.map((way) => (
              <div key={way.title} className="give-other-ways-card">
                <p className="give-other-ways-card-title">{way.title}</p>
                <p className="give-other-ways-card-description">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
