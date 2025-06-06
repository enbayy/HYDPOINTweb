import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GucKaynaklariData } from '../data/GucKaynaklariData';
import { HidrolikData } from '../data/HidrolikData';
import { PnomatikData } from '../data/PnomatikData';
import { SizdirmaData } from '../data/SizdirmaData';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const allProducts = [
        ...GucKaynaklariData,
        ...HidrolikData,
        ...PnomatikData,
        ...SizdirmaData,
    ];

    const filteredProducts = searchTerm.trim() === ''
        ? []
        : allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleSelect = (link) => {
        navigate(link);
        setSearchTerm('');
    };

    return (
        <div className="relative w-full max-w-full sm:max-w-xl mx-auto mt-8 px-4 sm:px-0">
            <input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 sm:p-3 border border-orange-500 rounded-lg text-black dark:text-white bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-orange-500 transition shadow-md text-sm sm:text-base"
            />
            {searchTerm.trim() !== '' && (
                <div className="absolute z-20 top-full left-0 w-full mt-2 bg-white dark:bg-black border border-gray-300 rounded-lg shadow-2xl max-h-60 sm:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleSelect(item.link)}
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border-b last:border-b-0 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition text-sm sm:text-base"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSelect(item.link);
                                }}
                            >
                                <div className="flex flex-col">
                                    <span className="text-black dark:text-white font-semibold leading-tight">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-center text-gray-500 select-none text-sm sm:text-base">
                            Ürün bulunamadı
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;