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
    const [openCategory, setOpenCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    const toggleCategory = (title) => {
        if (openCategory === title) {
            setOpenCategory(null);
        } else {
            setOpenCategory(title);
        }
    };

    const handleItemClick = (item) => {
        setSelectedItem(item.title);
        navigate(item.link);
    };

    return (
        <div className="container flex flex-col md:flex-row mx-auto py-8 gap-8">
            <aside className="md:w-1/4 w-full bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 font-inter">KATEGORİLER</h2>
                <nav className="space-y-4">
                    {menuData.map((menu, i) => (
                        <div key={i}>
                            <h4
                                onClick={() => toggleCategory(menu.title)}
                                className="font-semibold text-gray-700 dark:text-white mb-2 cursor-pointer select-none flex justify-between items-center font-inter"
                            >
                                {menu.title}
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${openCategory === menu.title ? "rotate-90" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </h4>

                            {openCategory === menu.title && (
                                <ul className="space-y-2">
                                    {menu.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => handleItemClick(item)}
                                            className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 text-sm font-inter ${selectedItem === item.title
                                                ? "bg-orange-100 text-white font-semibold shadow"
                                                : "text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                                                }`}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
                {HidrolikData.map((card) => (
                    <Link to={card.link} key={card.id}>
                        <div className="group relative bg-white dark:bg-zinc-900 overflow-hidden transition-transform transform hover:scale-105 duration-300 cursor-pointer border border-gray-200 dark:border-gray-700">
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

                            <div className="w-full aspect-[4/3] bg-white dark:bg-zinc-800">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-contain p-4"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300 font-inter">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <style>{`
  a:hover > div > .corner-top-horizontal {
    width: 100% !important;
    height: 2px !important;
  }
  a:hover > div > .corner-top-vertical {
    width: 2px !important;
    height: 100% !important;
  }
  a:hover > div > .corner-bottom-horizontal {
    width: 100% !important;
    height: 2px !important;
  }
  a:hover > div > .corner-bottom-vertical {
    width: 2px !important;
    height: 100% !important;
  }
`}</style>

        </div>
    );
};

export default HidrolikPage;