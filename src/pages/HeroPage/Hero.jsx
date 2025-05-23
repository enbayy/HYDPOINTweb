import React from "react";
import { cardData } from "../../data/HeroData";
import { Link } from "react-router-dom";

const CardGrid = () => {
  return (
    <div className="flex justify-center bg-white dark:bg-black px-2 sm:px-4 py-0 sm:py-8 md:py-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-7xl">
        {cardData.map((card) => (
          <Link
            to={`/detail/${card.link}`}
            key={card.id}
            className="bg-white rounded-3xl overflow-hidden transform transition duration-300 hover:scale-105 border border-black dark:border-white"
          >
            <div className="w-full aspect-[3/2] bg-white dark:bg-black">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="bg-white dark:bg-black p-4">
              <h3 className="text-black dark:text-white text-lg font-semibold text-center">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;