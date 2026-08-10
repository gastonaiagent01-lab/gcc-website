import { Link } from 'react-router-dom';
import { routes } from '../routes';
import ImageCarousel from './ImageCarousel';
import './SpaceDetailPage.css';

// Shared layout for the four "Find Your Space" detail pages (Medical, Office,
// Event, Church) — each is hero + gallery + feature grid + amenities + CTA in
// the Figma design (file 03, pages 31:2 / 31:96 / 31:190 / 31:284).
export default function SpaceDetailPage({
  eyebrow,
  titleLines,
  subtitle,
  photos,
  featuresEyebrow,
  featuresTitle,
  features,
  amenitiesEyebrow,
  amenitiesTitle,
  amenityColumns,
  ctaSubtitle,
}) {
  return (
    <>
      <section className="space-hero">
        <div className="container">
          <p className="eyebrow space-hero-eyebrow">{eyebrow}</p>
          <h1 className="space-hero-title">
            {titleLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="space-hero-subtitle">{subtitle}</p>
          <Link to={routes.contact} className="btn btn-primary">
            Schedule a Tour →
          </Link>
        </div>
      </section>

      <ImageCarousel images={photos} />

      <section className="space-features">
        <div className="container">
          <p className="eyebrow space-features-eyebrow">{featuresEyebrow}</p>
          <h2 className="space-features-title">{featuresTitle}</h2>
          <div className="space-feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="space-feature-card">
                {feature.href ? (
                  <a
                    href={feature.href}
                    target="_blank"
                    rel="noreferrer"
                    className="space-feature-card-title space-feature-card-link"
                  >
                    {feature.title}
                  </a>
                ) : (
                  <p className="space-feature-card-title">{feature.title}</p>
                )}
                <p className="space-feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-amenities">
        <div className="container">
          <p className="eyebrow space-amenities-eyebrow">{amenitiesEyebrow}</p>
          <h2 className="space-amenities-title">{amenitiesTitle}</h2>
          <div className="space-amenity-columns">
            {amenityColumns.map((column, i) => (
              <ul key={i} className="space-amenity-column">
                {column.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="space-cta">
        <div className="container space-cta-inner">
          <h2 className="space-cta-title">Ready to See the Space?</h2>
          <p className="space-cta-subtitle">{ctaSubtitle}</p>
          <Link to={routes.contact} className="btn btn-primary">
            Schedule a Tour →
          </Link>
        </div>
      </section>
    </>
  );
}
