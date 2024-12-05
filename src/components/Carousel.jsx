"use client";
import React, { useEffect, useRef, useState } from 'react';

const Carousel = ({ data, children }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);

  // Set the width of the carousel on mount
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className="flex flex-col items-start md:items-center sm:items-center lg:items-center w-full h-full">
      {/* Carousel container */}
      <div className="relative h-60 w-80 overflow-hidden rounded-md">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentImg * carouselWidth}px)`,
          }}
          className="absolute flex h-full w-full transition-transform duration-300"
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              style={{ width: carouselWidth }}
              className="h-full shrink-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* Navigation dots */}
      <div className="mt-3 flex justify-center gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`h-2 w-3 rounded-full cursor-pointer transition-all ${
              currentImg === i ? 'bg-[#FF5C00] w-5 scale-125' : 'bg-white'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
