import { Link } from 'react-router-dom';
import { footerPageLinks } from '../routes';
import './Footer.css';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <img
          src="/images/brand/gcc-logo-horizontal.webp"
          alt="Gaston Christian Center"
          className="footer-logo"
        />
        <div className="footer-contact">
          <p>8515 Greenville Ave., Dallas, TX 75243</p>
          <p>Suite S104</p>
          <p>
            <a href="mailto:contactus@gastonchristianctr.org">
              contactus@gastonchristianctr.org
            </a>
          </p>
          <p>
            <a href="tel:+19459544139">(945) 954-4139</a>
          </p>
        </div>
        <div className="footer-nav">
          <p className="footer-heading">Pages</p>
          {footerPageLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-social">
          <p className="footer-heading">Follow GCC</p>
          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/gastonchristiancenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <FacebookIcon />
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/gaston-christian-center"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
          <p className="footer-muted">Subscribe to our Quarterly Newsletter</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Gaston Christian Center · gastonchristianctr.org</p>
        </div>
      </div>
    </footer>
  );
}
