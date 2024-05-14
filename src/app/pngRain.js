"use client";
import React, { useEffect } from 'react';

const PNGRain = () => {
  useEffect(() => {
    const createRain = () => {
      // Create and configure the PNG element
      const png = document.createElement("img");
      png.src = "/bowl-of-hot-pho.png"; // Replace with the path to your PNG image
      png.classList.add("png-rain");
      
      // Calculate random position and animation properties
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      const animationDuration = Math.random() * 2 + 1;
      const animationDelay = 0;

      png.width = 50;
      png.height = 50; 
      
      // Apply styles and animation to the PNG element
      png.style.left = `${randomX}px`;
      png.style.top = `${randomY}px`;
      png.style.animation = `falling ${animationDuration}s linear ${animationDelay}s infinite`;
      
      // Append the PNG element to the document body
      document.body.appendChild(png);
    };

    // Create PNG rain effect after component mounts on the client-side
    const intervalId = setInterval(createRain, 5000); // Adjust interval as needed

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after component mount

  return null; // No need to render anything for the PNG rain effect
};

export default PNGRain;
