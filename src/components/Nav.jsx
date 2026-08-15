import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes, findYourSpaceLinks, giveLinks } from '../routes';
import './Nav.css';

function Dropdown({ label, links, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mq.matches);
    const handleChange = (e) => setCanHover(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={canHover ? () => setOpen(true) : undefined}
      onMouseLeave={canHover ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        className="nav-link nav-dropdown-trigger"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label} <span aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="nav-dropdown-panel">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-dropdown-item"
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to={routes.home} className="nav-logo" onClick={closeMenu}>
          <img
            src="/images/brand/gcc-logo-horizontal.webp"
            alt="Gaston Christian Center"
            className="nav-logo-img"
          />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <div className={`nav-collapse${menuOpen ? ' is-open' : ''}`}>
          <nav id="primary-nav" className="nav-links" aria-label="Primary">
            <Link to={routes.home} className="nav-link" onClick={closeMenu}>Home</Link>
            <Link to={routes.about} className="nav-link" onClick={closeMenu}>About</Link>
            <Dropdown label="Find Your Space" links={findYourSpaceLinks} onNavigate={closeMenu} />
            <Dropdown label="Give" links={giveLinks} onNavigate={closeMenu} />
            <Link to={routes.services} className="nav-link" onClick={closeMenu}>Services</Link>
            <Link to={routes.newRoots} className="nav-link" onClick={closeMenu}>New Roots</Link>
          </nav>
          <Link to={routes.contact} className="btn btn-primary nav-cta" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
