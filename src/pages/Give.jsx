import { Link } from 'react-router-dom';
import { routes } from '../routes';
import './Give.css';

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

// Order matches the live /give page (Dennis Page, Diana Baker, Jose Almanza).
const testimonials = [
  {
    quote:
      'GCC offers more than a space to rent; it provides practical support for ministry growth & is an epicenter of diverse ministries serving diverse communities.',
    name: 'Dennis Page',
    role: 'COO, Gateway of Grace',
    photo: '/images/live/testimonial-gateway-of-grace.webp',
    photoFit: 'logo',
  },
  {
    quote:
      'The low-cost rent with utilities provided for our space has allowed us to keep our overhead low. This alone allows us to put more of our money into our programs. Also, I appreciate the group meetings with all the agencies who are part of the GCC family, affording us the opportunity to partner with other service-oriented agencies that benefit our surrounding community.',
    name: 'Diana Baker',
    role: 'CEO/Co-Founder, Kids U',
    photo: '/images/live/testimonial-diana-baker.webp',
  },
  {
    quote:
      'Being part of a community where churches & nonprofits can work together to love & serve the same community is unheard of. What happens in this place is special & amazing!',
    name: 'Jose Almanza',
    role: 'Pastor, Centro Cristiano Biblico Metroplex',
    photo: '/images/live/testimonial-jose-almanza.webp',
  },
];

// "Friends of Gaston" is a link to its own page on the live site (no body
// copy there — see FriendsOfGaston.jsx); Legacy Giving and Time descriptions
// are verbatim from the live accordion.
const otherWays = [
  {
    title: 'Friends of Gaston',
    to: routes.friendsOfGaston,
  },
  {
    title: 'Legacy Giving',
    description:
      "Legacy giving is a powerful way to make a lasting difference by including the Gaston Christian Center in your will or estate plans. Your enduring gift continues to support the GCC, creating ripples of impact long after your lifetime. It's not only a reflection of your values, but a meaningful legacy that lives on and inspires future generations.",
  },
  {
    title: 'Time',
    description:
      "Your Time is Valuable. We are looking for volunteers to work with our ethnic churches at our New Roots Program, and other community outreach events. We'll work with you to create a multicultural volunteer opportunity for your group partner!",
  },
];

export default function Give() {
  return (
    <>
      <section className="give-testimonials">
        <div className="container">
          <h2 className="give-testimonials-title">
            Make an <span className="give-testimonials-title-accent">impact</span> today
          </h2>
          <div className="give-testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="give-testimonials-card">
                <img
                  className={`give-testimonials-avatar${
                    item.photoFit === 'logo' ? ' give-testimonials-avatar-logo' : ''
                  }`}
                  src={item.photo}
                  alt={item.photoFit === 'logo' ? `${item.role} logo` : item.name}
                  loading="lazy"
                />
                <p className="give-testimonials-quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="give-testimonials-name">{item.name}</p>
                <p className="give-testimonials-role">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="give-body">
        <div className="container">
          <h2 className="give-body-title">
            Help support our mission with a tax-exempt gift today or monthly.
          </h2>
          <div className="give-impact">
            <p className="give-impact-lead">What your monthly gift can do:</p>
            {impact.map((item) => (
              <p key={item.amount} className="give-impact-item">
                <span className="give-impact-amount">{item.amount}</span> {item.description}
              </p>
            ))}
            <p className="give-thank-you">Thank you!</p>
            {/* No GiveButter embed code on the live /give page — donations route
                through givebutter.com via Friends of Gaston. Swap this for a
                real embed once GCC shares GiveButter account access. */}
            <a
              href="https://givebutter.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Give Now →
            </a>
          </div>
        </div>
      </section>

      <section className="give-other-ways" id="other-ways">
        <div className="container">
          <h2 className="give-other-ways-title">Other Ways to Give:</h2>
          <div className="give-other-ways-grid">
            {otherWays.map((way) => (
              <div key={way.title} className="give-other-ways-card">
                <p className="give-other-ways-card-title">{way.title}</p>
                {way.description && (
                  <p className="give-other-ways-card-description">{way.description}</p>
                )}
                {way.to && (
                  <Link to={way.to} className="btn btn-navy give-other-ways-card-link">
                    Learn more
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
