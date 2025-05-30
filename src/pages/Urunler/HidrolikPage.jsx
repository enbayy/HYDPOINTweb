import React, { useState } from "react";
import { HidrolikData } from "../../data/HidrolikData";
import { Link, useNavigate } from "react-router-dom";

const menuData = [
    {
        title: "Hidrolik Sistemler",
        items: [
            { title: "Pompa Sistemleri", link: "/hidrolik/hidrolik1" },
            { title: "Valf Üniteleri", link: "/hidrolik/hidrolik2" },
            { title: "Silindir Grupları", link: "/hidrolik/hidrolik3" },
        ],
    },
    {
        title: "Bağlantı Elemanları",
        items: [
            { title: "Hortumlar", link: "/hidrolik/hidrolik4" },
            { title: "Bağlantı Parçaları", link: "/hidrolik/hidrolik5" },
        ],
    },
    {
        title: "Aksesuarlar",
        items: [
            { title: "Filtreler", link: "/hidrolik/hidrolik6" },
            { title: "Basınç Göstergeleri", link: "/hidrolik/hidrolik7" },
        ],
    },
];

const HidrolikPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (item) => {
        setSelectedCategory(item.title);
        navigate(item.link);
    };

    return (
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 py-8 gap-8">
            <aside className="md:w-1/4 w-full bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Kategoriler</h2>
                <nav className="space-y-4">
                    {menuData.map((menu, i) => (
                        <div key={i}>
                            <h4 className="font-semibold text-gray-700 dark:text-white mb-2">{menu.title}</h4>
                            <ul className="space-y-2">
                                {menu.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleCategoryClick(item)}
                                        className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 text-sm ${selectedCategory === item.title
                                            ? "bg-orange-100 text-white font-semibold shadow"
                                            : "text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                                            }`}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
                {HidrolikData.map((card) => (
                    <Link to={card.link} key={card.id}>
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer">
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HidrolikPage;