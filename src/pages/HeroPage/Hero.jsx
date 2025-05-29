import React from "react";
import { cardData } from "../../data/HeroData";
import { Link } from "react-router-dom";

const CardGrid = () => {
  return (
    <div className="flex justify-center bg-white dark:bg-black px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {cardData.map((card) => (
          <Link
            to={`/${card.link}`}
            key={card.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="w-full aspect-[4/3] bg-gray-50 dark:bg-zinc-800">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;