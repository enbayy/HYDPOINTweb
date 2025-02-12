import React from "react";
import { useParams } from "react-router-dom";
import { machineList } from "../../data/ProductData";

const ProductDetail = () => {
    const { id } = useParams();
    const product = machineList.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div className="text-center text-red-500 p-8">Ürün bulunamadı.</div>;
    }

    return (
        <div className="container mx-auto p-16">
            <div className="flex flex-col items-center space-y-6">
                <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
                <p className="text-lg">Ürün ID: {product.id}</p>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-64 h-64 object-contain rounded-lg border-2 border-gray-300"
                />
                <p className="text-lg">{product.type} - {product.condition}</p>
                <p className="text-xl font-semibold">{product.price} TL</p>
                <p className="text-sm">{product.location}</p>
            </div>
        </div>
    );
};

export default ProductDetail;