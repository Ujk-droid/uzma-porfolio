"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Static imports for images
import slide1 from '../htmll/public/d1.jpeg';
import slide2 from '../htmll/public/d10.jpeg';
import slide3 from '../htmll/public/d14.jpeg';
import slide4 from '../htmll/public/d2.jpeg';
import slide5 from '../htmll/public/d3.jpeg';
import slide6 from '../htmll/public/d5.jpeg';
import slide7 from '../htmll/public/d8.jpeg';
import slide8 from '../htmll/public/d7.jpeg';
import slide9 from '../htmll/public/d9.jpeg';


const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [slide1, slide2, slide3,slide4, slide5, slide6,slide7, slide8,slide9];

  // Update the slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval); // Clean up the interval
  }, [images.length]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen center pt-20 h-screen w-full dark:bg-black bg-gray-400  dark:bg-grid-gray-900 bg-grid-black/[0.2] relative">
      <div className="bg-gray-800 shadow-lg p-4 rounded-lg w-full max-w-3xl relative">
        <div className="w-full h-96 overflow-hidden rounded-lg"> {/* Fixed height */}
          <Image
            src={images[currentSlide]}
            alt={'images ${currentSlide + 1}'}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-900"
        >
          
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full shadow-md hover:bg-gray-900"
        >
          
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;