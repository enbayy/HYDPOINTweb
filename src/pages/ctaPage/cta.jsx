import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/iletisim")
    }
    return (
        <div className="text-center py-16 bg-black dark:bg-gray-900">
            <h2 className="text-4xl font-bold text-white mb-4">
                Pazarlama Çözümlerimizle Tanışın
            </h2>
            <p className="text-lg text-gray-400 mb-6">
                İhtiyacınız olan pazarlama çözümleri için hemen bizimle iletişime geçin.
            </p>
            <button
                className="bg-primary text-white text-lg font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-orange-600 transition-all"
                onClick={handleClick}
            >
                Bize Ulaşın
            </button>
        </div>
    );
};

export default CTASection;