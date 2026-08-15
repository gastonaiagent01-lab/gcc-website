import { useState } from 'react';
import './InquiryForm.css';

// Matches the booking-inquiry form on the live site's space pages
// (e.g. /eventspace, /churchspace) — same fields, same "Interested Space"
// checkbox list per space, submitted through the existing /api/contact
// function (see src/pages/Contact.jsx) so replies land in the same inbox.
export default function InquiryForm({ spaces }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    const interestedSpaces = spaces.filter((space) => data[space]);

    const message = [
      data.startDate && `Start date: ${data.startDate}`,
      interestedSpaces.length > 0 && `Interested space: ${interestedSpaces.join(', ')}`,
      '',
      data.details,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`.trim(),
          email: data.email,
          phone: data.phone,
          message,
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <fieldset className="inquiry-field-group">
        <legend>Name</legend>
        <div className="inquiry-name-row">
          <label className="inquiry-field">
            <span>
              First Name <em>(required)</em>
            </span>
            <input type="text" name="firstName" required />
          </label>
          <label className="inquiry-field">
            <span>
              Last Name <em>(required)</em>
            </span>
            <input type="text" name="lastName" required />
          </label>
        </div>
      </fieldset>

      <label className="inquiry-field">
        <span>
          Email <em>(required)</em>
        </span>
        <input type="email" name="email" required />
      </label>

      <label className="inquiry-field">
        <span>Phone</span>
        <input type="tel" name="phone" />
      </label>

      <label className="inquiry-field">
        <span>Start date</span>
        <input type="date" name="startDate" />
      </label>

      <fieldset className="inquiry-field-group">
        <legend>Interested Space</legend>
        <div className="inquiry-checkbox-row">
          {spaces.map((space) => (
            <label key={space} className="inquiry-checkbox">
              <input type="checkbox" name={space} />
              <span>{space}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="inquiry-field">
        <span>
          Tell Us About Your Event <em>(required)</em>
        </span>
        <textarea name="details" rows={5} required />
      </label>

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>

      {status === 'sent' && (
        <p className="inquiry-form-note">
          Thanks — we&rsquo;ve received your inquiry and will be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="inquiry-form-note inquiry-form-note-error">
          Something went wrong sending your inquiry. Please try again, or reach us directly at
          contactus@gastonchristianctr.org.
        </p>
      )}
    </form>
  );
}
