import { useState, useEffect, useRef } from 'react';

const slides = [
  { src: '/Assets/g2_slide1.webp', alt: 'New Launch Jersey' },
  { src: '/Assets/prx_slide1.webp', alt: 'Top Selling Jersey' },
  { src: '/Assets/vit_slide1.webp', alt: 'Limited Edition Jersey' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  function startAuto() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
  }

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  function move(step) {
    setIndex(prev => (prev + step + slides.length) % slides.length);
    startAuto();
  }

  function goTo(i) {
    setIndex(i);
    startAuto();
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div className="carousel-item" key={i}>
              <img src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={() => move(-1)}>&#10094;</button>
        <button className="carousel-btn next" onClick={() => move(1)}>&#10095;</button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot${i === index ? ' active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
