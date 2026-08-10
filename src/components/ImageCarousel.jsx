import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import './ImageCarousel.css';

// Swipeable carousel for the space detail pages' photo galleries (GAS-33),
// built on Embla Carousel — a maintained React (web) carousel component
// library, not a hand-rolled CSS scroll-snap or React Native component.
export default function ImageCarousel({ images, className = '' }) {
  const count = images?.length ?? 0;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: count > 1, align: 'center' });
  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + count) % count),
    [count]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % count),
    [count]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  if (!images || count === 0) return null;

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel-stage">
        <div className="image-carousel-viewport" ref={emblaRef}>
          <div className="image-carousel-track">
            {images.map((img, i) => (
              <div className="image-carousel-slide" key={img.src}>
                <div
                  className="image-carousel-frame"
                  role="button"
                  tabIndex={0}
                  onClick={() => setLightboxIndex(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(i);
                    }
                  }}
                  aria-label={`View photo ${i + 1} of ${count} full screen`}
                >
                  <img className="image-carousel-photo" src={img.src} alt={img.alt} loading="lazy" />
                  {img.caption && <p className="image-carousel-caption">{img.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="image-carousel-arrow image-carousel-arrow-prev"
              onClick={scrollPrev}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              className="image-carousel-arrow image-carousel-arrow-next"
              onClick={scrollNext}
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
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null &&
        createPortal(
          <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Photo full screen view">
            <div className="image-lightbox-backdrop" onClick={closeLightbox} />
            <button
              type="button"
              className="image-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close full screen photo"
            >
              ×
            </button>
            {count > 1 && (
              <button
                type="button"
                className="image-lightbox-arrow image-lightbox-arrow-prev"
                onClick={showPrev}
                aria-label="Previous photo"
              >
                ‹
              </button>
            )}
            <img
              className="image-lightbox-photo"
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
            />
            {count > 1 && (
              <button
                type="button"
                className="image-lightbox-arrow image-lightbox-arrow-next"
                onClick={showNext}
                aria-label="Next photo"
              >
                ›
              </button>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}
