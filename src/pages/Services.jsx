import { Link } from 'react-router-dom';
import { routes } from '../routes';
import './Services.css';

const PLACEHOLDER =
  '[COPY NEEDED — Q31: shared-tenant-services claims unconfirmed, no live-site source found; pending GCC content + CEO decision on Services page structure]';

const services = [
  'Shared Reception',
  'Mail & Packages',
  'High-Speed Internet',
  'Printing & Copying',
  'Conference Rooms',
  'Parking',
  'Janitorial',
  'Security',
];

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <p className="eyebrow services-hero-eyebrow">Tenant Services</p>
          <h1 className="services-hero-title">Services for Tenants & Partners</h1>
          <p className="services-hero-subtitle">
            More than space — our shared services help your organization operate efficiently and
            grow your impact.
          </p>
        </div>
      </section>

      <div className="container">
        <p className="services-note">
          [Q9 — Telehealth services: standalone page or subsection of Services? Pending CEO
          decision.]
        </p>
      </div>

      <section className="services-list">
        <div className="container">
          <p className="eyebrow services-list-eyebrow">What We Provide</p>
          <h2 className="services-list-title">
            Shared Tenant Services{' '}
            <span className="services-structure-flag">
              [Q31 — page structure pending CEO decision: program listing vs. shared amenities]
            </span>
          </h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service} className="services-card">
                <p className="services-card-title">{service}</p>
                <p className="services-card-description">{PLACEHOLDER}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-lease">
        <div className="container">
          <p className="eyebrow services-lease-eyebrow">Leasing</p>
          <h2 className="services-lease-title">Flexible Lease Terms</h2>
          <p className="services-lease-body">{PLACEHOLDER}</p>
          <Link to={routes.contact} className="btn btn-primary">
            Inquire About Space →
          </Link>
        </div>
      </section>
    </>
  );
}
