import React from 'react';
import Book from '../PageFlip';

const AllProductList = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="container p-12 mt-12">
                <Book />
            </div>
        </div>
    );
}

export default AllProductList;