import React, { useState } from "react";
import { GucKaynaklariData } from "../../data/GucKaynaklariData";

const menuData = [
    {
        title: "Güç Aktarım",
        items: ["xxx", "xxx", "xxx"],
    },
    {
        title: "Kontrol Elemanları",
        items: ["xxx", "xxx"],
    },
    {
        title: "Diğer",
        items: ["xxx", "xxx"],
    },
];

const GucKaynaklariPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 py-8 gap-8">
            <aside className="md:w-1/4 w-full bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Kategoriler</h2>
                <nav className="space-y-4">
                    {menuData.map((menu, i) => (
                        <div key={i}>
                            <h4 className="font-semibold text-gray-700 mb-2">{menu.title}</h4>
                            <ul className="space-y-2">
                                {menu.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => setSelectedCategory(item)}
                                        className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 text-sm ${selectedCategory === item
                                            ? "bg-primary text-white font-semibold shadow"
                                            : "text-gray-600 hover:bg-orange-100"
                                            }`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
                {GucKaynaklariData.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                    >
                        <div className="w-full aspect-[4/3] bg-gray-50">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-contain p-4"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GucKaynaklariPage;