"use client";
import React, { useState, useEffect } from 'react';
import jumbotron from './styles/jumbotron.css';

const Jumbotron = () => {
    const images = ['/pho.png', '/csw.jpg', 'vermicelli.jpg', 'crabrangoon.jpg'];
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className="slideshow-container relative">
        {images.map((image, index) => (
          <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto" // Set width to 100% and maintain aspect ratio
            />
          </div>
        ))}
        <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-950 text-white px-3 py-2 rounded-l-md" onClick={prevSlide}>&#10094;</button>
        <button className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-950 text-white px-3 py-2 rounded-r-md" onClick={nextSlide}>&#10095;</button>
      </div>
    );
  };
  

export default Jumbotron;