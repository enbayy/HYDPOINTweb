import React from "react";
import { FaBoxOpen, FaHandshake, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const servicesData = [
    {
        name: "Malzeme Tedarik ve Satış",
        icon: <FaBoxOpen className="text-5xl text-primary group-hover:text-black duration-500" />,
        description: "Hidrolik ve pnömatik malzemeleri çeşitli tedarikçilerden temin ediyor ve doğru alıcılarla buluşturuyoruz. Güvenli ve hızlı bir alım-satım süreci sağlıyoruz.",
        aosDelay: "0",
    },
    {
        name: "Alım-Satım Fiyatlandırma ve Pazarlık Yönetimi",
        icon: <FaHandshake className="text-5xl text-primary group-hover:text-black duration-500" />,
        description: "Hidrolik ve pnömatik malzemeler için alım-satım fiyatlarını titizlikle analiz ediyor ve pazarın taleplerine göre stratejik fiyatlandırmalar yapıyoruz.",
        aosDelay: "500",
    },
    {
        name: "Satıcı ve Alıcı Arasındaki Eşleştirme",
        icon: <FaShoppingCart className="text-5xl text-primary group-hover:text-black duration-500" />,
        description: "Satıcılar ve alıcılar arasındaki doğru eşleştirmeleri yaparak, her iki tarafın da ihtiyaçlarını en iyi şekilde karşılıyoruz.",
        aosDelay: "1000",
    },
];

const ServicesPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/iletisim");
    };

    return (
        <div className="py-16 bg-gray-50 dark:bg-black text-black dark:text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-primary">Hidrolik ve Pnömatik Sistem Alım-Satım ve Pazarlama Hizmetlerimiz</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                    Hidrolik ve pnömatik sistemlerin alım-satım süreçlerinde uzmanlaşmış bir şirket olarak, ürünleri doğru fiyatlarla temin edip, uygun alıcılarla buluşturuyoruz.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {servicesData.map((service) => (
                        <div
                            key={service.name}
                            data-aos="fade-up"
                            data-aos-delay={service.aosDelay}
                            className="card flex flex-col h-full text-center group space-y-4 p-6 sm:py-12 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="grid place-items-center">{service.icon}</div>
                            <h1 className="text-2xl font-bold">{service.name}</h1>
                            <p className="flex-grow">{service.description}</p>
                            <button
                                onClick={handleClick}
                                className="mt-auto inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300 underline-offset-1"
                            >
                                Daha Fazla Bilgi
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;