import React, { useState } from "react";

export default function ImageToggleSlider() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const handlePrev = () => {
    setShowFirstImage(true);
  };

  const handleNext = () => {
    setShowFirstImage(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto my-10 select-none">
        <div className="flex items-center justify-center gap-6 w-full">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-4xl font-bold p-4 rounded-full hover:bg-gray-200 transition"
            aria-label="Previous"
          >
            &#8592;
          </button>

          {/* Image */}
          <img
            src={
              showFirstImage
                ? "https://www.bullworkmobility.com/technology/slide1.webp"
                : "https://www.bullworkmobility.com/technology/slide2.webp"
            }
            alt="Slider"
            className="max-h-[600px] max-w-full object-contain rounded-md shadow-lg"
          />

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-4xl font-bold p-4 rounded-full hover:bg-gray-200 transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Truncated Text */}
        <p
          className="text-center max-w-xl text-gray-700"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Bullwork's electric vehicles are equipped with a smart app that
          provides detailed insights into its live location, current speed,
          remaining battery charge and real-time performance metrics.
        </p>
      </div>
    </>
  );
}
