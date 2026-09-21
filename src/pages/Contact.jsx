import { useState } from 'react';
import './Contact.css';

// Submits to the /api/contact Vercel serverless function, which sends the
// message via Resend. See api/contact.js for the email-sending logic.
export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
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

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>

            {status === 'sent' && (
              <p className="contact-form-note">
                Thanks for reaching out — we&rsquo;ve received your message and will be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form-note contact-form-note-error">
                Something went wrong sending your message. Please try again, or reach us directly
                at contactus@gastonchristianctr.org.
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
