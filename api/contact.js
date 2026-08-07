import { Resend } from 'resend';

// Vercel serverless function (deployed automatically from /api).
// Sends the Contact page form to GCC's inbox via Resend.
//
// Required env vars (set in Vercel project settings, never hardcoded):
//   RESEND_API_KEY  - Resend API key
//   CONTACT_TO_EMAIL - inbox that receives contact form submissions
//                      (defaults to contactus@gastonchristianctr.org, the
//                      address already published on the Contact page)
//
// v1 sends from Resend's shared onboarding domain (onboarding@resend.dev)
// per CEO sign-off 2026-08-07 — swap FROM_EMAIL once GCC's own sending
// domain is verified in Resend.
const FROM_EMAIL = 'Gaston Christian Center Website <onboarding@resend.dev>';
const DEFAULT_TO_EMAIL = 'contactus@gastonchristianctr.org';
const MAX_FIELD_LENGTH = 5000;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email is not configured yet. Please try again later.' });
  }

  const { name, organization, email, phone, message } = req.body ?? {};

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof message !== 'string' || !message.trim() ||
    !isValidEmail(email)
  ) {
    return res.status(400).json({ error: 'Name, a valid email, and message are required.' });
  }

  if (
    name.length > MAX_FIELD_LENGTH ||
    message.length > MAX_FIELD_LENGTH ||
    (organization && organization.length > MAX_FIELD_LENGTH) ||
    (phone && phone.length > MAX_FIELD_LENGTH)
  ) {
    return res.status(400).json({ error: 'One or more fields are too long.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: toEmail,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ''}
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'Message could not be sent. Please try again later.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form send failed:', err);
    return res.status(500).json({ error: 'Message could not be sent. Please try again later.' });
  }
}
