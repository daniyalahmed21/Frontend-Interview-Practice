import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center gap-2 mx-auto p-4 w-80">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`shadow-lg mb-4 rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform ${
            index === currentIndex ? "block" : "hidden"
          }`}
        />
      ))}
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageSlider;
