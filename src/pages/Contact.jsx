import { useState } from 'react';
import './Contact.css';

// Form is UI-only for now — no backend/email service is wired up yet.
// Picking a submission handler (e.g. a form service, serverless function)
// is a cost/vendor decision that needs CEO sign-off before it's added.
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <p className="eyebrow contact-hero-eyebrow">Get In Touch</p>
          <h1 className="contact-hero-title">Contact Gaston Christian Center</h1>
          <p className="contact-hero-subtitle">
            Ready to schedule a tour, ask about space availability, or learn more about our
            programs? We&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container contact-columns">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-form-title">Send a Message</h2>

            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label className="contact-field">
              <span>Organization</span>
              <input type="text" name="organization" placeholder="Organization name" />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>

            <label className="contact-field">
              <span>Phone</span>
              <input type="tel" name="phone" placeholder="(214) 555-0100" />
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" rows={5} required />
            </label>

            <button type="submit" className="btn btn-primary">
              Send Message →
            </button>

            {submitted && (
              <p className="contact-form-note">
                Thanks for reaching out — message submission isn&rsquo;t connected to email yet;
                this is a UI preview only.
              </p>
            )}
          </form>

          <div className="contact-info">
            <h2 className="contact-info-title">Contact Information</h2>

            <div className="contact-info-block">
              <p className="eyebrow contact-info-label">Address</p>
              <p>8515 Greenville Ave., Office S104</p>
              <p>Dallas, TX 75243</p>
            </div>

            <div className="contact-info-block">
              <p className="eyebrow contact-info-label">Phone</p>
              <p>(945) 954-4139</p>
            </div>

            <div className="contact-info-block">
              <p className="eyebrow contact-info-label">Email</p>
              <p>contactus@gastonchristianctr.org</p>
            </div>

            <div className="contact-info-block">
              <p className="eyebrow contact-info-label">Hours</p>
              <p>[CONFIRM — business hours not published on live site; owner: GCC]</p>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-map">[MAP NEEDED] Google Maps embed — 8515 Greenville Ave., Dallas, TX 75243</div>
    </>
  );
}
