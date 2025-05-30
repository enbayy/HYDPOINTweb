import React from "react";
import { Link } from "react-router-dom";
import { FeaturedData } from "../data/FeaturedData";

const FeaturedProducts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10 text-black dark:text-white tracking-tight">
        Öne Çıkan Ürünlerimiz
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {FeaturedData.map((card) => (
          <Link to={card.link} key={card.id}>
            <div className="relative group bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
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