"use client";
import React, { useState, useEffect } from 'react';
import jumbotron from './styles/jumbotron.css';
// const slides = ['/bowl-of-hot-pho.png', '/testpeterson.png', '/peterugly.jpg']; // Add the paths to your slideshow images

const Jumbotron = () => {
    const images = ['/bowl-of-hot-pho.png', '/testpeterson.png', '/peterugly.jpg'];
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-l-md" onClick={prevSlide}>&#10094;</button>
      <button className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-r-md" onClick={nextSlide}>&#10095;</button>
      </div>
    );
  };

export default Jumbotron;