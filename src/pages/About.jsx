import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { teamMembers, values } from './aboutContent';
import './About.css';

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <p className="eyebrow about-hero-eyebrow">Our Story</p>
          <h1 className="about-hero-title">About Gaston Christian Center</h1>
          <p className="about-hero-subtitle">
            A faith-rooted nonprofit providing affordable, mission-aligned space to
            organizations strengthening the Dallas community.
          </p>
        </div>
      </section>

      <section className="about-history">
        <div className="container about-history-columns">
          <div className="about-history-text">
            <p className="eyebrow about-history-eyebrow">Our History</p>
            <h2 className="about-history-title">
              Rooted in Faith,
              <br />
              Built for Community
            </h2>
            <p>
              Gaston Christian Center has served the South Dallas community for over fifteen
              years, beginning as a ministry of Gaston Avenue Baptist Church with a conviction:
              that space is a resource, and making it accessible multiplies the good
              organizations can do.
            </p>
            <p>
              What began as shared office space for a handful of local ministries has grown
              into a multi-tenant campus offering medical suites, office space, event rooms,
              and church facilities — reducing overhead so organizations can focus on people.
            </p>
          </div>
          <img
            className="placeholder-photo about-history-photo"
            src="/images/live/about-facility.webp"
            alt="Gaston Avenue Baptist Church, Dallas, early 1900s"
          />
        </div>
        <div className="container">
          <div className="about-timeline-placeholder">
            [TIMELINE NEEDED] Visual history spanning 1990–2025 — GCC to supply period images
            and captions.
          </div>
        </div>
      </section>

      <section className="about-leadership">
        <div className="container">
          <p className="eyebrow about-leadership-eyebrow">Leadership</p>
          <h2 className="about-leadership-title">Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <div className="placeholder-photo team-card-photo">[PHOTO NEEDED]</div>
                <div className="team-card-body">
                  <p className="team-card-name">{member.name}</p>
                  <p className="team-card-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <p className="eyebrow about-values-eyebrow">Our Values</p>
          <h2 className="about-values-title">What We Stand For</h2>
          <div className="value-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <h3 className="value-card-title">{value.title}</h3>
                <p className="value-card-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <h2 className="about-cta-title">Partner With Gaston Christian Center</h2>
          <p className="about-cta-subtitle">
            Ready to schedule a tour, learn about leasing, or explore giving?
          </p>
          <div className="about-cta-row">
            <Link to={routes.contact} className="btn btn-primary">
              Schedule a Tour →
            </Link>
            <Link to={routes.give} className="btn btn-ghost-light">
              Give to GCC
            </Link>
          </div>
          <p className="about-cta-contact">
            8515 Greenville Ave., Office S104, Dallas, TX 75243 · (945) 954-4139 ·
            contactus@gastonchristianctr.org
          </p>
        </div>
      </section>
    </>
  );
}
