import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";

const CTASection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/iletisim");
  };

  return (
    <section
      aria-label="Pazarlama çözümleri için iletişim çağrısı"
      className="relative text-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black rounded-lg"
    >
      <div className="absolute inset-0 opacity-25 bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 mix-blend-multiply pointer-events-none rounded-lg"></div>

      <div className="relative max-w-2xl mx-auto text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-snug drop-shadow-md">
          Pazarlama Çözümlerimizle Tanışın
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-lg mx-auto">
          İşinizi büyütmek için özel stratejiler ve yaratıcı çözümler sunuyoruz. Hemen bizimle iletişime geçin.
        </p>

        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all font-semibold text-base sm:text-lg py-3 px-6 rounded-md shadow-md"
          aria-label="İletişim sayfasına git"
        >
          <FiMail className="w-5 h-5" />
          Bize Ulaşın
        </button>

        <div className="mt-8 w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mx-auto shadow-sm"></div>
      </div>
    </section>
  );
};

export default CTASection;