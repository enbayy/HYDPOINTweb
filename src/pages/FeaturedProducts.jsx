import React from "react";
import { Link } from "react-router-dom";
import { FeaturedData } from "../data/FeaturedData";

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
        ÖNE ÇIKAN ÜRÜNLERİMİZ
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {FeaturedData.map((card) => (
          <Link to={card.link} key={card.id}>
            <div className="relative group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
              <div className="relative w-full aspect-[4/3] bg-white dark:bg-zinc-800">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-black text-xl font-semibold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {card.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;