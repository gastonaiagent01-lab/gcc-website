import { useState } from 'react';
import './ImageCarousel.css';

// Simple image carousel for the space detail pages' photo galleries — one
// large photo at a time with prev/next arrows and dot pagination.
export default function ImageCarousel({ images, className = '' }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goTo = (i) => setIndex((i + images.length) % images.length);
  const active = images[index];

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel-viewport">
        <img
          className="image-carousel-photo"
          src={active.src}
          alt={active.alt}
          key={active.src}
        />
        {active.caption && <p className="image-carousel-caption">{active.caption}</p>}

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="image-carousel-arrow image-carousel-arrow-prev"
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              className="image-carousel-arrow image-carousel-arrow-next"
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="image-carousel-dots" role="tablist" aria-label="Photo gallery navigation">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              className={`image-carousel-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
