import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes, findYourSpaceLinks, giveLinks } from '../routes';
import './Nav.css';

function Dropdown({ label, links }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="nav-link nav-dropdown-trigger" aria-expanded={open}>
        {label} <span aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="nav-dropdown-panel">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="nav-dropdown-item">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to={routes.home} className="nav-logo">
          <img
            src="/images/brand/gcc-logo-horizontal.webp"
            alt="Gaston Christian Center"
            className="nav-logo-img"
          />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link to={routes.home} className="nav-link">Home</Link>
          <Link to={routes.about} className="nav-link">About</Link>
          <Dropdown label="Find Your Space" links={findYourSpaceLinks} />
          <Dropdown label="Give" links={giveLinks} />
          <Link to={routes.services} className="nav-link">Services</Link>
          <Link to={routes.newRoots} className="nav-link">New Roots</Link>
        </nav>
        <Link to={routes.contact} className="btn btn-primary nav-cta">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
