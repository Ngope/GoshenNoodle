"use client";
import { useState, useEffect } from 'react';

const images = ['/pho.png', '/csw.jpg', '/vermicelli.jpg', '/crabrangoon.jpg'];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);
  const next = () => setCurrent(c => (c + 1) % images.length);

  return (
    <section className="bg-[#F45B42] py-10 px-4">
      <div className="relative max-w-lg mx-auto">
        <div className="relative h-64 overflow-hidden rounded-xl shadow-lg">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Food photo ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            &#10094;
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            &#10095;
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
