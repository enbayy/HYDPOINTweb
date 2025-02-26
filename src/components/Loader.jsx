import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
                    Yükleniyor...
                </p>
            </div>
        </div>
    );
};

export default Loader;