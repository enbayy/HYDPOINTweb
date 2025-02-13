import React from "react";
import HTMLFlipBook from "react-pageflip";
import ProductCard from "./ProductPage/ProductCard";
import { machineList } from "../data/ProductData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const Book = () => {
  const pages = chunkArray(machineList, 4);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-100 p-8">
      <HTMLFlipBook
        width={600}
        height={650}
        className="shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-700 to-white"
      >
        <div className="relative w-full h-full text-white text-2xl font-bold p-20">
          <div className="relative z-10 flex justify-center items-center h-full">
            <p className="text-5xl font-serif text-center">ÜRÜN KATOLOĞU</p>
          </div>
        </div>

        {pages.map((products, index) => (
          <div
            key={index}
            className="relative w-full h-auto sm:h-auto md:h-auto lg:h-auto xl:h-auto bg-gray-400 p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-center text-black -mt-4 mb-4">
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
            <div className="absolute top-2 right-2 text-black  hover:text-gray-700 cursor-pointer">
              <ChevronRight size={32} />
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center w-full h-full bg-gray-300 text-xl font-bold text-gray-700">
          Daha fazla ürün için bizi takip edin! 🚀
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;