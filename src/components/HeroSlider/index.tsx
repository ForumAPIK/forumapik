import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

export interface SlideItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  link?: string;
}

interface HeroSliderProps {
  slides: SlideItem[];
  autoPlayInterval?: number;
}

export default function HeroSlider({ 
  slides, 
  autoPlayInterval = 5000 
}: HeroSliderProps): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval, slides.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (slides.length === 0) return null;

  return (
    <div 
      className={styles.heroSlider}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
          >
            {slide.link && (
              <a
                href={slide.link}
                className={styles.slideLink}
                aria-label={slide.title || slide.alt || `Buka slide ${index + 1}`}
              />
            )}
            {slide.type === 'image' ? (
              <img 
                src={slide.src} 
                alt={slide.alt || `Slide ${index + 1}`}
                className={styles.slideMedia}
              />
            ) : (
              <video
                src={slide.src}
                className={styles.slideMedia}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            {(slide.title || slide.description) && (
              <div className={styles.slideContent}>
                {slide.title && (
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                )}
                {slide.description && (
                  <p className={styles.slideDescription}>{slide.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.activeIndicator : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
