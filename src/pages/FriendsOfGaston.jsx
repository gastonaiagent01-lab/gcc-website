import { Link } from 'react-router-dom';
import { routes } from '../routes';
import './FriendsOfGaston.css';

const benefits = [
  'A quarterly donor email update.',
  'Invitations to community events and other interesting events.',
  "Feel good feelings! When you know you are helping people, you can't help but feel good :)",
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
      'Setting up a recurring monthly donation is simple and automatic, eliminating the need to remember to give each month. This convenience makes it easier for you to stay committed and reduces the hassle of repeated transactions.',
  },
  {
    title: 'Long-Term Commitment to Change',
    description:
      'By becoming a monthly donor, you demonstrate a deep, ongoing commitment to the cause. Real change takes time, and your sustained support ensures that GCC can continue its work and make a lasting difference in the community.',
  },
];

export default function FriendsOfGaston() {
  return (
    <>
      <section className="fog-hero">
        <div className="container">
          <h1 className="fog-hero-title">Friends of Gaston</h1>
          <p className="fog-hero-subtitle">
            Subscribe to Good! Support GCC&rsquo;s mission by contributing a monthly donation.
          </p>
          <p className="fog-hero-note">
            Check out GCC&rsquo;s carefully chosen partner in fundraising and note at the bottom
            of its homepage the list of other nonprofits it serves:{' '}
            <a href="https://www.givebutter.com" target="_blank" rel="noreferrer">
              www.givebutter.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="fog-photo-intro">
        <div className="container fog-photo-intro-inner">
          <p className="fog-photo-intro-body">
            Friends of Gaston is a monthly giving movement composed of passionate community
            members that help sustain the Gaston Christian Center — room by room, light by light,
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
          <h2 className="fog-why-title">Join the Movement in Monthly Giving</h2>
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
          {/* No GiveButter embed code on the live /friendsofgaston page —
              donations route through givebutter.com. Swap this for a real
              embed once GCC shares GiveButter account access. */}
          <a
            href="https://givebutter.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Give Monthly →
          </a>
          <p className="fog-processor-note">
            Donations are processed securely through our partner in fundraising, GiveButter
            (givebutter.com).
          </p>
          <p className="fog-orgs-pointer">
            Curious who else calls Gaston Christian Center home? See the full list of{' '}
            <Link to={routes.services}>organizations in our community</Link> on our Services page.
          </p>
        </div>
      </section>
    </>
  );
}
