import React, { useState } from "react";

const ImageGallerySlider = () => {
  const imageCount = 6;
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <div className="w-full h-[400px] bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 mb-6">
        <span className="text-xl text-gray-600 font-semibold">
          Büyük Resim Alanı {selected + 1}
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: imageCount }).map((_, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`w-24 h-24 md:w-28 md:h-28 rounded-xl cursor-pointer flex items-center justify-center text-sm font-medium transition-all duration-200 shadow-sm 
              ${
                selected === index
                  ? "bg-blue-200 border-4 border-blue-500 scale-105"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <span className="text-gray-700">Resim {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallerySlider;