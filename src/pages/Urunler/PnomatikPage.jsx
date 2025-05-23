import React from "react";
import { PnomatikData } from "../../data/PnomatikData";

const PnomatikPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
            {PnomatikData.map((card) => (
                <div
                    key={card.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                >
                    <div className="w-full aspect-[4/3]">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-center">{card.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PnomatikPage;