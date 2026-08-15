import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { mission, aboutProgram, getInvolvedCards, faqs } from './newRootsContent';
import './NewRoots.css';

export default function NewRoots() {
  return (
    <>
      <section className="newroots-hero">
        <div className="container newroots-hero-inner">
          <div className="newroots-hero-text">
            <p className="eyebrow newroots-hero-eyebrow">Community Initiative</p>
            <h1 className="newroots-hero-title">New Roots Initiative</h1>
            <p className="newroots-hero-subtitle">
              Helping immigrant and refugee families build new lives in Dallas — connecting
              community generosity with families who are furnishing homes and finding stability.
            </p>
          </div>
          <img
            className="placeholder-photo newroots-hero-photo"
            src="/images/live/new-roots-hero.webp"
            alt="New Roots community program"
          />
        </div>
      </section>

      <section className="newroots-mission">
        <div className="container">
          <p className="eyebrow newroots-mission-eyebrow">{mission.eyebrow}</p>
          <p className="newroots-mission-text">&ldquo;{mission.quote}&rdquo;</p>
        </div>
      </section>

      <section className="newroots-about">
        <div className="container newroots-about-columns">
          <div className="newroots-about-text">
            <p className="eyebrow newroots-about-eyebrow">The Initiative</p>
            <h2 className="newroots-about-title">Helping Families Build New Roots in Dallas</h2>
            <p>{aboutProgram.intro}</p>
          </div>
          <img
            className="placeholder-photo newroots-about-photo"
            src="/images/live/new-roots-about.webp"
            alt="New Roots participants"
          />
        </div>
        <div className="container">
          <div className="newroots-program-grid">
            {aboutProgram.points.map((point) => (
              <div key={point.title} className="newroots-program-card">
                <p className="newroots-program-card-title">{point.title}</p>
                <p className="newroots-program-card-description">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="newroots-values-row">
            {aboutProgram.values.map((value) => (
              <span key={value} className="newroots-values-pill">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="newroots-serve" id="volunteer">
        <div className="container">
          <p className="eyebrow newroots-serve-eyebrow">Ways to Help</p>
          <h2 className="newroots-serve-title">Get Involved with New Roots</h2>
          <div className="newroots-serve-cards">
            {getInvolvedCards.map((card) => (
              <div key={card.title} className="newroots-serve-card">
                <h3 className="newroots-serve-card-title">{card.title}</h3>
                <p className="newroots-serve-card-description">{card.description}</p>
                {card.isInternal ? (
                  <Link to={routes.contact} className="newroots-serve-card-link">
                    {card.cta}
                  </Link>
                ) : (
                  <a
                    href={card.href}
                    className="newroots-serve-card-link"
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {card.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newroots-faq">
        <div className="container">
          <p className="eyebrow newroots-faq-eyebrow">Questions</p>
          <h2 className="newroots-faq-title">Frequently Asked Questions</h2>
          <div className="newroots-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="newroots-faq-item">
                <summary className="newroots-faq-question">{faq.question}</summary>
                <p className="newroots-faq-answer">{faq.answer}</p>
              </details>
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
