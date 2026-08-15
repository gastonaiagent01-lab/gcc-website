import { useEffect, useState } from 'react';
import './HeroCarousel.css';

// Auto-rotating hero banner (GAS-76) — ports the original site's rotating
// hero photos (previously baked into a single ambient video) back into
// discrete images so each slide can carry its own caption.
export default function HeroCarousel({ slides, intervalMs = 5000, className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className={`hero-carousel ${className}`}>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          className={`hero-carousel-slide${i === index ? ' is-active' : ''}`}
          src={slide.src}
          alt={slide.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <p className="hero-carousel-caption">{slides[index].caption}</p>
    </div>
  );
}
