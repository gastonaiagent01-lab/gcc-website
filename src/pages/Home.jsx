import { Link } from 'react-router-dom';
import { routes } from '../routes';
import HeroCarousel from '../components/HeroCarousel';
import { mission } from './newRootsContent';
import './Home.css';

const heroSlides = [
  {
    src: '/images/live/hero-01-hands.webp',
    alt: 'Hands joined together in a circle at Gaston Christian Center',
    caption: 'Community and unity at the heart of everything we do',
  },
  {
    src: '/images/live/hero-02-podium.webp',
    alt: 'Speakers addressing an audience at a Gaston Christian Center event',
    caption: 'Hosting gatherings that build lasting connections',
  },
  {
    src: '/images/live/hero-03-medical.webp',
    alt: 'Medical staff assisting a patient by phone in a tenant medical suite',
    caption: 'On-site medical care for our community',
  },
  {
    src: '/images/live/hero-04-kids-praying.webp',
    alt: 'Children praying together before a meal',
    caption: 'New Roots families sharing a meal together',
  },
  {
    src: '/images/live/hero-05-conference-room.webp',
    alt: 'Conference room available for tenant use',
    caption: 'Flexible meeting space for tenant organizations',
  },
  {
    src: '/images/live/hero-06-pantry-truck.webp',
    alt: 'Volunteer at the Community Pantry truck',
    caption: 'Delivering food access to neighbors in need',
  },
  {
    src: '/images/live/hero-07-kid-closeup.webp',
    alt: 'Smiling child participating in a Gaston Christian Center program',
    caption: 'Every child is welcomed and valued in our programs',
  },
  {
    src: '/images/live/hero-08-banquet.webp',
    alt: 'Fellowship Hall set up with tables for an event',
    caption: 'Fellowship Hall set for a special event',
  },
  {
    src: '/images/live/hero-09-balloon.webp',
    alt: 'Two women celebrating together at a Gaston Christian Center event',
    caption: 'Celebrating milestones with our GCC family',
  },
  {
    src: '/images/live/hero-10-earpiercing.webp',
    alt: 'Volunteer providing hands-on care to a community member',
    caption: 'Hands-on care and support for our neighbors',
  },
  {
    src: '/images/live/hero-11-classroom.webp',
    alt: 'Classroom space set up for a training session',
    caption: 'Classroom space built for growth and learning',
  },
  {
    src: '/images/live/hero-12-steeple.webp',
    alt: 'Church steeple against a blue sky',
    caption: 'A place for worship, ceremony, and outreach',
  },
];

// Card copy + order match the live homepage's "Building Impact. Find Your
// Space." grid exactly (GAS-337 audit), including two minor subject/verb
// slips ("our spaces area accessible", "encourages spiritual connection")
// that are present verbatim on the live site — see GAS-337 issue comment.
const spaceCards = [
  {
    title: 'Medical Spaces',
    description:
      'Our medical spaces elevate care by giving providers a professional and patient‑centered environment. Designed for private practices, specialists, and community health programs alike, our spaces area accessible and empower clinicians.',
    cta: 'Inquire About Medical Space →',
    to: routes.medicalSpaces,
    image: '/images/live/medical-spaces.webp',
    imageAlt: 'Suite Medical 25 interior at Gaston Christian Center',
  },
  {
    title: 'Event Rental',
    description:
      'Our event venues bring people together and spark collaboration and meaningful connection. For everything from workshops to celebrations, they empower hosts to create experiences that strengthen relationships, and drive lasting impact.',
    cta: 'Explore Event Venues →',
    to: routes.eventSpace,
    image: '/images/live/event-space.webp',
    imageAlt: 'Fellowship Hall set up for an event at Gaston Christian Center',
  },
  {
    title: 'Office Space',
    description:
      'Our office spaces give teams the environment they need to communicate clearly and innovate with purpose. With flexible layouts that strengthen workflows and relationships, our spaces help organizations grow.',
    cta: 'View Available Suites →',
    to: routes.officeSpace,
    image: '/images/live/office-space.webp',
    imageAlt: 'Office suite interior at Gaston Christian Center',
  },
  {
    title: 'Church Space',
    description:
      'Our church event spaces encourages spiritual connection and meaningful fellowship, giving a place where transformation can begin. With welcoming environments, we support gatherings from worship and ceremonies to outreach programs.',
    cta: 'Learn About Church Space →',
    to: routes.churchSpace,
    image: '/images/live/church-space.webp',
    imageAlt: 'A small group gathered in worship at Gaston Christian Center',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              Jesus tells us to go to the nations— At times He brings the nations to us.
            </h1>
            <p className="hero-title-emphasis">We strive to be ready.</p>
            <p className="hero-subtitle">
              Gaston Christian Center may be the place for your ministry, church, or nonprofit
              organization to realize its full potential.
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
          <HeroCarousel slides={heroSlides} className="placeholder-photo hero-photo" />
        </div>
      </section>

      <section className="mission-strip">
        <div className="container mission-strip-inner">
          <p className="eyebrow mission-strip-eyebrow">Our Mission</p>
          <div>
            <h2 className="mission-strip-title">Creating Opportunity Through Space</h2>
            <p className="mission-strip-text">
              Guided by Christian principles of compassion, love and service, Gaston Christian
              Center and its donors provide holistic support to nonprofit organizations and
              church communities. We do this by providing accessible, affordable and functional
              tenant spaces.
            </p>
          </div>
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
            <p className="eyebrow new-roots-eyebrow">{mission.eyebrow}</p>
            <p className="new-roots-description">&ldquo;{mission.quote}&rdquo;</p>
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

      <section className="find-space">
        <div className="container">
          <p className="eyebrow find-space-eyebrow">Find Your Space</p>
          <h2 className="find-space-title">Building Impact. Find Your Space.</h2>
          <p className="find-space-subtitle">
            We build impact by offering spaces where people genuinely connect.
          </p>
          <div className="space-cards">
            {spaceCards.map((card) => (
              <div key={card.title} className="space-card">
                <img className="space-card-image" src={card.image} alt={card.imageAlt} />
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
    </>
  );
}
