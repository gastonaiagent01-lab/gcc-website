import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { mission, teamMembers } from './aboutContent';
import './About.css';

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-inner">
          <h1 className="about-hero-title">{mission.eyebrow}</h1>
          <p className="about-hero-subtitle">
            {mission.quote} &mdash; {mission.attribution}
          </p>
        </div>
      </section>

      <section className="about-leadership">
        <div className="container">
          <p className="eyebrow about-leadership-eyebrow">Leadership</p>
          <h2 className="about-leadership-title">Meet the Team</h2>
          <div className="team-list">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                {member.photo && (
                  <img
                    className="team-card-photo"
                    src={member.photo}
                    alt={member.name}
                  />
                )}
                <div className="team-card-body">
                  <p className="team-card-name">{member.name}</p>
                  <p className="team-card-role">{member.role}</p>
                  {member.bio && (
                    <div className="team-card-bio">
                      {member.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
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
