import React from 'react';
import { machineList } from '../About/ProductData';
import ProductCard from './ProductCard';

const AllProductList = () => {

    return (
        <div className="container p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                {machineList.map((data) => (
                    <div key={data.id}>
                        <ProductCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProductList;