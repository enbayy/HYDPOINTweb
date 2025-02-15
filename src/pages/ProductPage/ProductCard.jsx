import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/urunler/detay/${data.id}`);
    };

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="w-3/4 space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
        >
            <div className="w-full h-[120px] flex justify-center items-center bg-white">
                <img
                    src={data.image}
                    alt={data.name}
                    className="absolute w-3/4 h-3/4 object-contain opacity-50 blur-md scale-110 shadow-lg"
                />
                <img
                    src={data.image}
                    alt={data.name}
                    className="relative w-full h-full object-contain transform group-hover:scale-150 transition-transform duration-500"
                />
            </div>
            <div className="space-y-2 text-center">
                <h1 className="text-primary font-semibold">{data.name}</h1>
                <p>{data.type} - {data.condition}</p>
                <div className="flex justify-between items-center text-xl font-semibold">
                    <p>{data.price}TL</p>
                    <button onClick={handleClick}>Detaylar</button>
                </div>
            </div>
        </div>
    );
};


export default ProductCard;