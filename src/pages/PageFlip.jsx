import React from "react";
import HTMLFlipBook from "react-pageflip";
import ProductCard from "./ProductPage/ProductCard";
import { machineList } from "../data/ProductData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hyd from '../assets/HYDPOINT3.png'

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const Book = () => {
  const pages = chunkArray(machineList, 4);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-8">
      <HTMLFlipBook
        width={600}
        height={650}
        className="shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-700 dark:from-gray-900 dark:to-gray-800 to-white"
      >
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white text-2xl font-bold px-10 space-y-36 mt-10">
          <img
            src={hyd}
            alt="Ürün Kataloğu"
            className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto object-contain p-16"
          />
          <div className="relative z-10 text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif">ÜRÜN KATALOĞU</p>
          </div>
        </div>

        {pages.map((products, index) => (
          <div
            key={index}
            className="relative w-full h-auto bg-gray-400 dark:bg-gray-900 p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-center text-black mb-4">
              Sayfa {index + 1}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 px-2 xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-6">
              {products.map((data) => (
                <div
                  key={data.id}
                  className="flex justify-center w-2/5 sm:w-2/3 md:w-2/5 lg:w-1/4 xl:w-full"
                >
                  <ProductCard data={data} className="h-96" />
                </div>
              ))}
            </div>

            <div className="absolute top-2 left-2 text-black hover:text-gray-700 cursor-pointer">
              <ChevronLeft size={32} />
            </div>
            <div className="absolute top-2 right-2 text-black hover:text-gray-700 cursor-pointer">
              <ChevronRight size={32} />
            </div>
          </div>
        ))}

        <div className="relative w-full h-full text-white text-xl font-bold p-10 flex flex-col items-center justify-center">
          <img
            src="/assets/follow-us.jpg"
            alt="Takip Edin"
            className="w-full h-auto max-h-80 object-contain"
          />
          <div className="relative z-10 text-center">
            <p className="text-4xl font-serif">Daha fazla ürün için bizi takip edin! 🚀</p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;