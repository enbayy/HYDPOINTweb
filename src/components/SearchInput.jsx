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
        <div className="relative max-w-xl mx-auto mt-8">
            <input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm"
            />

            {searchTerm.trim() !== '' && (
                <div className="absolute z-20 top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-2xl max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleSelect(item.link)}
                                className="flex items-center gap-4 p-4 border-b last:border-b-0 hover:bg-orange-100 cursor-pointer transition"
                            >
                                <div className="flex flex-col">
                                    <span className="text-gray-900 font-semibold text-lg leading-tight">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 text-center text-gray-500 italic select-none">
                            Ürün bulunamadı
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;