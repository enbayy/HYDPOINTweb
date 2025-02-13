import React from "react";
import HTMLFlipBook from "react-pageflip";
import ProductCard from "./ProductPage/ProductCard";
import { machineList } from "../data/ProductData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
};

const Book = () => {
    const pages = chunkArray(machineList, 4);

    return (
        <div className="flex justify-center items-center h-full bg-gradient-to-r from-gray-200 to-gray-100 p-8">
            <HTMLFlipBook
                width={700}
                height={600}
                className="shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-700 to-white"
            >
                <div className="relative w-full h-full text-white text-2xl font-bold">
                    <div className="relative z-10 flex justify-center items-center h-full">
                        <p className="text-3xl">ÜRÜN KATOLOĞU</p>
                    </div>
                </div>

                {pages.map((products, index) => (
                    <div key={index} className="relative w-full h-68 bg-gradient-to-r from-white to-gray-700 p-6 shadow-lg">
                        <h2 className="text-lg font-semibold text-center text-gray-800 -mt-6">Sayfa {index + 1}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 w-full h-auto">
                            {products.map((data) => (
                                <div key={data.id} className="flex justify-center">
                                    <ProductCard data={data} className="h-96" />
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                            <ChevronLeft size={24} />
                        </div>
                        <div className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                            <ChevronRight size={24} />
                        </div>
                    </div>
                ))}
                <div className="flex justify-center items-center w-full h-full bg-gray-300 text-xl font-bold text-gray-700">
                    Daha fazla ürün için bizi takip edin! 🚀
                </div>
            </HTMLFlipBook>
        </div>
    );
};

export default Book;