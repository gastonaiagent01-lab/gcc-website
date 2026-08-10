import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './ImageCarousel.css';

// Swipeable carousel for the space detail pages' photo galleries (GAS-33),
// built on Embla Carousel — a maintained React (web) carousel component
// library, not a hand-rolled CSS scroll-snap or React Native component.
export default function ImageCarousel({ images, className = '' }) {
  const count = images?.length ?? 0;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: count > 1, align: 'center' });
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

  if (!images || count === 0) return null;

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel-viewport" ref={emblaRef}>
        <div className="image-carousel-track">
          {images.map((img) => (
            <div className="image-carousel-slide" key={img.src}>
              <div className="image-carousel-frame">
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
    </div>
  );
}
