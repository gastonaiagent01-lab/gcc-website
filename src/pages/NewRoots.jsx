import { Link } from 'react-router-dom';
import { routes } from '../routes';
import './NewRoots.css';

const PROGRAM_PLACEHOLDER = {
  title: '[COPY NEEDED — program name; owner: GCC — Q29]',
  description: '[COPY NEEDED — program description, eligibility, and services offered; owner: GCC — Q29]',
};

const programs = Array.from({ length: 6 }, () => PROGRAM_PLACEHOLDER);

export default function NewRoots() {
  return (
    <>
      <section className="newroots-hero">
        <div className="container">
          <p className="eyebrow newroots-hero-eyebrow">Community Initiative</p>
          <h1 className="newroots-hero-title">New Roots Initiative</h1>
          <p className="newroots-hero-subtitle">
            Helping immigrant and refugee families build new lives in Dallas — connecting
            community generosity with families who are furnishing homes and finding stability.
            [CONFIRM Q29 — expanded program scope pending GCC verification]
          </p>
        </div>
      </section>

      <img
        className="placeholder-photo newroots-hero-photo"
        src="/images/live/new-roots-hero.webp"
        alt="New Roots community program"
      />

      <section className="newroots-about">
        <div className="container newroots-about-columns">
          <div className="newroots-about-text">
            <p className="eyebrow newroots-about-eyebrow">The Initiative</p>
            <h2 className="newroots-about-title">Helping Families Build New Roots in Dallas</h2>
            <p>
              The New Roots Initiative provides holistic support to refugees, immigrants, and
              underserved families across Dallas — connecting people with resources,
              relationships, and opportunities they need to build stable and flourishing lives in
              their new home.
            </p>
            <p className="newroots-copy-needed">
              [COPY NEEDED — additional program descriptions pending GCC confirmation; owner:
              GCC — Q29]
            </p>
          </div>
          <img
            className="placeholder-photo newroots-about-photo"
            src="/images/live/new-roots-about.webp"
            alt="New Roots participants"
          />
        </div>
      </section>

      <section className="newroots-programs">
        <div className="container">
          <p className="eyebrow newroots-programs-eyebrow">
            Programs [CONFIRM Q29 — pending GCC verification]
          </p>
          <h2 className="newroots-programs-title">
            How We Serve
            <span className="newroots-copy-needed-inline">
              {' '}
              [COPY NEEDED — Q29: program list pending GCC confirmation; owner: GCC]
            </span>
          </h2>
          <div className="newroots-program-grid">
            {programs.map((program, i) => (
              <div key={i} className="newroots-program-card">
                <p className="newroots-program-card-title">{program.title}</p>
                <p className="newroots-program-card-description">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newroots-cta">
        <div className="container newroots-cta-inner">
          <h2 className="newroots-cta-title">Partner with New Roots</h2>
          <p className="newroots-cta-subtitle">
            Organizations, churches, and individuals can support New Roots through volunteering,
            referrals, donations, or programmatic partnerships.
          </p>
          <Link to={routes.contact} className="btn btn-primary">
            Get Involved →
          </Link>
        </div>
      </section>
    </>
  );
}
