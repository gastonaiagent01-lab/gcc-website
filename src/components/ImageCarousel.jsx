import { useState } from 'react';
import './ImageCarousel.css';

// Contained "peek" carousel for the space detail pages' photo galleries —
// modeled on the TXLaserCombat /experience carousel (GAS-33): a moderately
// sized, rounded active card centered in the frame with the previous/next
// photos peeking in dimmed on either side, rather than one giant full-bleed
// cropped photo dominating the page.
export default function ImageCarousel({ images, className = '' }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const count = images.length;
  const goTo = (i) => setIndex((i + count) % count);
  const active = images[index];
  const prev = images[(index - 1 + count) % count];
  const next = images[(index + 1) % count];

  const slidePosition = (offset) => {
    if (offset === 0) return 'is-active';
    if (offset === -1) return 'is-prev';
    return 'is-next';
  };

  const slides =
    count > 1
      ? [
          { img: prev, offset: -1, key: `prev-${(index - 1 + count) % count}` },
          { img: active, offset: 0, key: `active-${index}` },
          { img: next, offset: 1, key: `next-${(index + 1) % count}` },
        ]
      : [{ img: active, offset: 0, key: `active-${index}` }];

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel-viewport">
        {slides.map(({ img, offset, key }) => (
          <div
            key={key}
            className={`image-carousel-slide ${slidePosition(offset)}`}
            onClick={offset !== 0 ? () => goTo(index + offset) : undefined}
            aria-hidden={offset !== 0}
          >
            <img className="image-carousel-photo" src={img.src} alt={offset === 0 ? img.alt : ''} />
            {offset === 0 && img.caption && (
              <p className="image-carousel-caption">{img.caption}</p>
            )}
          </div>
        ))}

        {count > 1 && (
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

      {count > 1 && (
        <div className="image-carousel-dots" role="tablist" aria-label="Photo gallery navigation">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1} of ${count}`}
              className={`image-carousel-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
