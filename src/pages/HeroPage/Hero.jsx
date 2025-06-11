import React from "react";
import { cardData } from "../../data/HeroData";
import { Link } from "react-router-dom";

const CardGrid = () => {
  return (
    <div className="container flex flex-col justify-center bg-white dark:bg-black px-4 py-12 gap-8">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-inter">
        ÜRÜNLERİMİZ
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {cardData.map((card) => (
          <Link
            to={`/${card.link}`}
            key={card.id}
            className="relative bg-white dark:bg-zinc-900 overflow-hidden transform transition-transform hover:scale-105 duration-300 border border-gray-200 dark:border-gray-700 font-inter"
          >
            <span
              className="corner-top-horizontal absolute top-0 right-0 bg-primary transition-all duration-300 rounded-tr-lg"
              style={{ width: "30px", height: "2px" }}
            />
            <span
              className="corner-top-vertical absolute top-0 right-0 bg-primary transition-all duration-300 rounded-tr-lg"
              style={{ width: "2px", height: "30px" }}
            />
            <span
              className="corner-bottom-horizontal absolute bottom-0 left-0 bg-primary transition-all duration-300 rounded-bl-lg"
              style={{ width: "30px", height: "2px" }}
            />
            <span
              className="corner-bottom-vertical absolute bottom-0 left-0 bg-primary transition-all duration-300 rounded-bl-lg"
              style={{ width: "2px", height: "30px" }}
            />
            <div className="w-full aspect-[4/3]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        a:hover > .corner-top-horizontal {
          width: 100% !important;
          height: 2px !important;
        }
        a:hover > .corner-top-vertical {
          width: 2px !important;
          height: 100% !important;
        }
        a:hover > .corner-bottom-horizontal {
          width: 100% !important;
          height: 2px !important;
        }
        a:hover > .corner-bottom-vertical {
          width: 2px !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default CardGrid;