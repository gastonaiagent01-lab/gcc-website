import './PageStub.css';

// Placeholder page shell used for the 10 non-Home routes until each page's
// Figma frame is pulled in a follow-up increment (see GAS-12 comments).
export default function PageStub({ eyebrow, title, description }) {
  return (
    <section className="page-stub">
      <div className="container">
        <p className="eyebrow page-stub-eyebrow">{eyebrow}</p>
        <h1 className="page-stub-title">{title}</h1>
        {description && <p className="page-stub-description">{description}</p>}
        <p className="page-stub-note">
          Content for this page is being built next — copy and layout will come from the
          approved Figma design.
        </p>
      </div>
    </section>
  );
}
