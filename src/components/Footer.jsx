import { Link } from 'react-router-dom';
import { footerPageLinks } from '../routes';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-logo">GCC</div>
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
          {/* Social handles pending from GCC — see open question in GAS-12 comments */}
          <p className="footer-muted">Instagram · Facebook · LinkedIn (links pending)</p>
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
