import { Link } from 'react-router-dom';
import { routes } from '../routes';
import './Home.css';

const spaceCards = [
  {
    title: 'Medical Spaces',
    description:
      'Our medical spaces elevate care by giving providers a professional and patient-centered environment. Accessible spaces for private practices, specialists, and community health programs.',
    cta: 'Inquire About Medical Space →',
    to: routes.medicalSpaces,
  },
  {
    title: 'Office Space',
    description:
      'Our office spaces give teams the environment they need to communicate clearly and innovate with purpose. Flexible layouts with utilities included — 60% below market rate.',
    cta: 'View Available Suites →',
    to: routes.officeSpace,
  },
  {
    title: 'Event Rental',
    description:
      'Our event venues bring people together and spark collaboration and meaningful connection. From workshops to celebrations, empower hosts to create experiences that drive lasting impact.',
    cta: 'Explore Event Venues →',
    to: routes.eventSpace,
  },
  {
    title: 'Church Space',
    description:
      'Our church spaces encourage spiritual connection and meaningful fellowship — a place where transformation can begin. Welcoming environments for worship, ceremonies, and outreach.',
    cta: 'Learn About Church Space →',
    to: routes.churchSpace,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow hero-eyebrow">Ministry · Church · Nonprofit</p>
            <h1 className="hero-title">Creating Opportunity Through Space</h1>
            <p className="hero-subtitle">
              Guided by Christian principles of compassion, love and service, Gaston Christian
              Center and its donors provide holistic support to nonprofit organizations and
              church communities through accessible, affordable, and functional tenant spaces.
            </p>
            <div className="hero-cta-row">
              <Link to={routes.contact} className="btn btn-primary">
                Schedule a Tour →
              </Link>
              <Link to={routes.about} className="btn btn-ghost-light">
                Learn About GCC
              </Link>
            </div>
          </div>
          <img
            className="placeholder-photo hero-photo"
            src="/images/live/hero-home.webp"
            alt="Gaston Christian Center community"
          />
        </div>
      </section>

      <section className="mission-strip">
        <p>
          &ldquo;Jesus tells us to go to the nations— At times He brings the nations to us. We
          strive to be ready.&rdquo;
        </p>
      </section>

      <section className="find-space">
        <div className="container">
          <p className="eyebrow find-space-eyebrow">Find Your Space</p>
          <h2 className="find-space-title">Spaces built for mission-driven work</h2>
          <div className="space-cards">
            {spaceCards.map((card) => (
              <div key={card.title} className="space-card">
                <div className="space-card-icon" aria-hidden="true" />
                <h3 className="space-card-title">{card.title}</h3>
                <p className="space-card-description">{card.description}</p>
                <Link to={card.to} className="space-card-link">
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-statement">
        <div className="container">
          <p className="eyebrow mission-eyebrow">Our Mission</p>
          <p className="mission-text">
            GCC is a nonprofit serving other nonprofit organizations and churches. We trust in
            the good work each brings to the broader community through service. We believe by
            working together we and our donors help create an irrepressible synergy where
            &ldquo;Hope is participation in the very Life of God.&rdquo; — Richard Rohr
          </p>
        </div>
      </section>

      <section className="new-roots">
        <div className="container new-roots-inner">
          <img
            className="placeholder-photo new-roots-photo"
            src="/images/live/new-roots-graphic.webp"
            alt="New Roots Neighborhood Program"
          />
          <div className="new-roots-text">
            <p className="eyebrow new-roots-eyebrow">Program Spotlight</p>
            <h2 className="new-roots-title">New Roots Neighborhood Program</h2>
            <p className="new-roots-description">
              GCC&rsquo;s New Roots program connects low-income and immigrant community members
              with holistic resources — from home goods and food access to referrals,
              appointments, and community connection.
            </p>
            <div className="new-roots-cta-row">
              <Link to={routes.newRoots} className="btn btn-navy">
                Learn About New Roots
              </Link>
              <Link to={`${routes.newRoots}#volunteer`} className="btn btn-ghost-navy">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="give-cta">
        <div className="container">
          <p className="eyebrow give-cta-eyebrow">Make an Impact</p>
          <h2 className="give-cta-title">Your generosity creates opportunity.</h2>
          <div className="give-cta-row">
            {/* GiveButter embed/link pending real URL from GCC — see GAS-12 open items */}
            <Link to={routes.give} className="btn btn-white">
              Donate via GiveButter
            </Link>
            <Link to={routes.friendsOfGaston} className="btn btn-ghost-light">
              Friends of Gaston — Monthly Giving
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
