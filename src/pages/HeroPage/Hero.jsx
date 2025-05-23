import React from "react";
import { cardData } from "../../data/HeroData";
import { Link } from "react-router-dom";

const CardGrid = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl">
        {cardData.map((card) => (
          <Link
            to={`/detail/${card.link}`}
            key={card.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="w-full aspect-[4/3] bg-white">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
};

export default CardGrid;