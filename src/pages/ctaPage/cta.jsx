import React from 'react';

const CTASection = () => {
    return (
        <div className="text-center py-16 bg-black">
            <h2 className="text-4xl font-bold text-white mb-4">
                Pazarlama Çözümlerimizle Tanışın
            </h2>
            <p className="text-gray-400 mb-6">
                İhtiyacınız olan pazarlama çözümleri için hemen bizimle iletişime geçin.
            </p>
            <button
                className="bg-primary text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-primary/80 transition-all"
                onClick={() => window.location.href = "#contact"}
            >
                Hizmetlerimizi Keşfedin
            </button>
        </div>
    );
};

export default CTASection;