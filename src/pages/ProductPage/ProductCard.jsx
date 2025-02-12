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
            className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
        >
            <div className="w-full h-[120px]">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
            </div>
            <div className="space-y-2">
                <h1 className="text-primary font-semibold">{data.name}</h1>
                <p>{data.type} - {data.condition}</p>
                <div className="flex justify-between items-center text-xl font-semibold">
                    <p>{data.price}TL</p>
                    <button onClick={handleClick}>Details</button>
                </div>
            </div>
            <p className="text-sm absolute bottom-0 left-3">
                {data.location}
            </p>
        </div>
    );
};

export default ProductCard;