import React, { useState } from "react";
import { SizdirmaData } from "../../data/SizdirmaData";
import { Link, useNavigate } from "react-router-dom";

const menuData = [
    {
        title: "Sızdırmazlık Ürünleri",
        items: [
            { title: "Conta Takımları", link: "/sizdirmazlik/sizdirmazlik1" },
            { title: "Keçe Sistemleri", link: "/sizdirmazlik/sizdirmazlik2" },
            { title: "O-Ringler", link: "/sizdirmazlik/sizdirmazlik3" },
        ],
    },
    {
        title: "Bağlantı Elemanları",
        items: [
            { title: "Conta Yatakları", link: "/sizdirmazlik/sizdirmazlik4" },
            { title: "Sızdırmazlık Pulu", link: "/sizdirmazlik/sizdirmazlik5" },
        ],
    },
    {
        title: "Aksesuarlar",
        items: [
            { title: "Yağ Sıyırıcılar", link: "/sizdirmazlik/sizdirmazlik6" },
            { title: "Kılavuz Elemanlar", link: "/sizdirmazlik/sizdirmazlik7" },
        ],
    },
];

const tableData = [
    {
        urunKodu: "HYD",
        nutring: "YOK",
        tozKecesi: "16x24x5/7",
        oring: "40",
        dl: "33",
        dis: "16",
    },
    {
        urunKodu: "HYD",
        nutring: "18x25x5",
        tozKecesi: "18x26x5/7",
        oring: "40",
        dl: "33",
        dis: "18",
    },
    {
        urunKodu: "HYD",
        nutring: "20x28x5",
        tozKecesi: "20x28x5/7",
        oring: "40",
        dl: "33",
        dis: "20",
    },
    {
        urunKodu: "HYD",
        nutring: "22x30x6",
        tozKecesi: "22x30x5/7",
        oring: "40",
        dl: "33",
        dis: "22",
    },
    {
        urunKodu: "HYD",
        nutring: "20x28x5",
        tozKecesi: "20x28x5/7",
        oring: "45",
        dl: "36",
        dis: "20",
    },
];

const SizdirmaPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [openCategory, setOpenCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (item) => {
        setSelectedCategory(item.title);
        navigate(item.link);
    };

    const toggleCategory = (title) => {
        if (openCategory === title) {
            setOpenCategory(null);
        } else {
            setOpenCategory(title);
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="md:w-1/4 w-full bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        Kategoriler
                    </h2>
                    <nav className="space-y-4">
                        {menuData.map((menu, i) => (
                            <div key={i}>
                                <h4
                                    onClick={() => toggleCategory(menu.title)}
                                    className="font-semibold text-black dark:text-white mb-2 cursor-pointer select-none flex justify-between items-center"
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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        ></path>
                                    </svg>
                                </h4>
                                {openCategory === menu.title && (
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
                                )}
                            </div>
                        ))}
                    </nav>
                </aside>

                <div className="md:w-3/4 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
                        {SizdirmaData.map((card) => (
                            <Link to={card.link} key={card.id}>
                                <div className="group bg-white dark:bg-zinc-900 overflow-hidden transition-transform transform hover:scale-105 duration-300 cursor-pointer">
                                    <div className="w-full aspect-[4/3] bg-white dark:bg-zinc-800">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-contain p-4"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 overflow-x-auto">
                        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                            Ürün Tablosu
                        </h3>
                        <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-zinc-800">
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                                        ÜRÜN KODU
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                                        NUTRİNG
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                                        TOZ KEÇESİ
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                                        ORİNG
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                                        Dl
                                    </th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                                        Diş
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="even:bg-gray-50 dark:even:bg-zinc-800 hover:bg-orange-100 dark:hover:bg-orange-900"
                                    >
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {row.urunKodu}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {row.nutring}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {row.tozKecesi}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {row.oring}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {row.dl}
                                        </td>
                                        <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                                            {row.dis}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SizdirmaPage;