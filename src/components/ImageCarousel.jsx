import { useEffect, useRef, useState } from 'react';
import './ImageCarousel.css';

// Swipeable snap carousel for the space detail pages' photo galleries (GAS-33).
// `react-native-snap-carousel` was requested as a reference, but it's a React
// Native library (built on RN's View/Animated/PanResponder) and can't run in
// this Vite + react-dom web app. This reproduces its actual behavior — a
// large centered slide, real swipe/drag paging, momentum snap, small peeks of
// the neighbors — using native CSS scroll-snap so touch/trackpad gestures
// work for free instead of being hand-rolled.
export default function ImageCarousel({ images, className = '' }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = images?.length ?? 0;

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (i + count) % count;
    const slide = track.children[clamped];
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || count < 2) return;

    let frame;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let closestDistance = Infinity;
        Array.from(track.children).forEach((slide, i) => {
          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(slideCenter - trackCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = i;
          }
        });
        setIndex(closest);
      });
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [count]);

  if (!images || count === 0) return null;

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel-viewport">
        <div className="image-carousel-track" ref={trackRef}>
          {images.map((img) => (
            <div className="image-carousel-slide" key={img.src}>
              <img className="image-carousel-photo" src={img.src} alt={img.alt} loading="lazy" />
              {img.caption && <p className="image-carousel-caption">{img.caption}</p>}
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="image-carousel-arrow image-carousel-arrow-prev"
              onClick={() => scrollToIndex(index - 1)}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              className="image-carousel-arrow image-carousel-arrow-next"
              onClick={() => scrollToIndex(index + 1)}
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
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
