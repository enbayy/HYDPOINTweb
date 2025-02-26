import React from "react";
import HTMLFlipBook from "react-pageflip";
import ProductCard from "./ProductPage/ProductCard";
import { machineList } from "../data/ProductData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hyd from '../assets/hydLogo2.png';
import { useNavigate } from "react-router-dom";

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const Book = () => {
  const pages = chunkArray(machineList, 4);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/iletisim")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-8 lg:p-12">
      <div data-aos="zoom-in" className="relative w-[600px] h-[700px] shadow-[0px_0px_15px_rgba(0,0,0,1)] dark:shadow-[0px_0px_15px_rgba(255,255,255,0.2)] rounded-2xl transition-shadow duration-500 ease-in-out">
        <HTMLFlipBook
          width={550}
          height={650}
          className="rounded-lg overflow-hidden bg-white dark:bg-black"
          style={{ overflow: "hidden", width: "100%", height: "100%" }}
        >
          <div className="relative w-full h-auto flex flex-col items-center justify-center text-white text-2xl font-bold p-16 sm:p-8 space-y-24 border border-black dark:border-white">
            <img
              src={hyd}
              alt="Ürün Kataloğu"
              className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto object-contain p-4 bg-transparent border border-black dark:border-white dark:p-4 rounded-3xl"
            />
            <div className="relative z-10 text-center space-y-4">
              <p className="text-3xl text-black dark:text-white sm:text-4xl md:text-5xl font-sans font-semibold">ÜRÜN</p>
              <p className="text-3xl text-black dark:text-white sm:text-4xl md:text-5xl font-sans font-semibold">KATALOĞU</p>
            </div>
          </div>
          {pages.map((products, index) => (
            <div
              key={index}
              className="relative w-full h-auto bg-white dark:bg-black p-6 border border-black dark:border-white"
            >
              <h2 className="text-xl font-semibold text-center text-black dark:text-white mb-4">
                Sayfa {index + 1}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-6 place-items-stretch">
                {products.map((data) => (
                  <div key={data.id} className="flex justify-center w-full">
                    <ProductCard data={data} className="h-96 w-full" />
                  </div>
                ))}
              </div>
              <div className="absolute top-6 left-2 text-black dark:text-white hover:text-gray-700 cursor-pointer">
                <ChevronLeft size={32} />
              </div>
              <div className="absolute top-6 right-2 text-black dark:text-white hover:text-gray-700 cursor-pointer">
                <ChevronRight size={32} />
              </div>
            </div>
          ))}
          <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white text-2xl font-bold px-10 space-y-36 mt-10">
            <img
              src={hyd}
              alt="Takip Edin"
              className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto object-contain p-4 bg-transparent border dark:p-4 rounded-3xl"
            />
            <div className="relative flex flex-col z-10 text-center sm:text-left p-1 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
              <p className="text-black text-center dark:text-white text-3xl sm:text-4xl md:text-4xl font-sans px-6">
                Daha fazlası için iletişime geçin. <br />
                <button onClick={handleClick} className="button-outline mt-10">
                  <p className="font-sans text-base">İletişime Geç</p>
                </button>
              </p>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Book;