import React, { useRef, useEffect, useState } from 'react';
import logo from "../../assets/hydLogo.png";

const AboutDetailPage = () => {
    const textRef = useRef(null);
    const [textHeight, setTextHeight] = useState(0);

    useEffect(() => {
        if (textRef.current) {
            setTextHeight(textRef.current.clientHeight);
        }
    }, []);

    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                <div ref={textRef}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        HYD POİNT ENDÜSTRİYEL
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        <span className="font-semibold text-primary">Hyd Point</span> olarak; markaların pazarlamada fark yaratmasını sağlayan yenilikçi ve etkili stratejiler geliştiriyoruz. Amacımız, iş ortaklarımızın sürdürülebilir büyümesine katkıda bulunmak ve sektörde öncü bir konumda yer almaktır.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Deneyimli ekibimizle müşterilerimizin ihtiyaçlarını detaylı bir şekilde analiz ederek, kısa ve uzun vadede gerçek değer yaratan çözümler sunuyoruz. İş süreçlerinize uyumlu, ölçülebilir ve etkili pazarlama uygulamaları geliştirirken, teknolojiyi yaratıcı yöntemlerle kullanmayı önceliklendiriyoruz.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Hizmetlerimiz, stratejik planlamadan uygulamaya kadar geniş bir yelpazeyi kapsar. Müşterilerimizin marka bilinirliğini artırmak, hedef kitleleriyle etkin iletişim kurmak ve rekabet avantajı elde etmelerini sağlamak için sürekli olarak yenilikçi yöntemler araştırıyoruz.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Hyd Point olarak, sadece bir pazarlama firması değil, aynı zamanda iş ortaklarımız için stratejik bir partneriz. Yaratıcılık, strateji ve teknolojiyi bir araya getirerek, markanızın büyümesini ve gelişmesini destekliyoruz. Sürdürülebilir başarıya odaklanarak, her projede kalite ve güveni ön planda tutuyoruz.
                    </p>
                </div>

                <div className="flex justify-end">
                    <div
                        className="w-full md:w-[400px] overflow-hidden"
                        style={{ height: textHeight }}
                    >
                        <img
                            src={logo}
                            alt="Hyd Point"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDetailPage;