import React from "react";
import malzeme from "../../assets/malzeme.png";

const AboutDetail = () => {
    return (
        <section id="about-detail">
            <div className="dark:bg-dark bg-white sm:min-h-[800px] sm:grid sm:place-items-center duration-300">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                        <div data-aos="zoom-in">
                            <img
                                src={malzeme}
                                alt="Company Image"
                                className="sm:scale-125 sm:-translate-x-11 max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                            />
                        </div>
                        <div>
                            <div data-aos="zoom-in" className="space-y-6 sm:p-16 pb-6">
                                <h1

                                    className="text-3xl sm:text-4xl font-bold font-sans"
                                >
                                    Hakkımızda
                                </h1>
                                <p className="leading-8 tracking-wide">
                                    HYD Point, alım satım işlemlerinde hızlı, güvenilir ve kaliteli çözümler sunan bir pazarlama şirketidir. İş ortaklarımıza en iyi ticaret deneyimini sağlamayı hedefliyoruz.
                                </p>
                                <p>
                                    Sektördeki deneyimimiz ile geniş bir ürün yelpazesi ve stratejik çözümler sunarak, iş süreçlerinizi kolaylaştırıyor ve büyümenize katkı sağlıyoruz.
                                </p>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold">
                                        Vizyon ve Misyon
                                    </h2>
                                    <p className="leading-8">
                                        Vizyonumuz, sektördeki lider konumumuzu pekiştirerek, müşterilerimize her zaman değer katmak ve sürdürülebilir büyümeyi sağlamak. Misyonumuz ise, güvenilir ve kaliteli hizmet anlayışımızla ticaret dünyasında kalıcı bir iz bırakmaktır.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold">
                                        Değerlerimiz
                                    </h2>
                                    <ul className="list-disc pl-6">
                                        <li>Güvenilirlik</li>
                                        <li>Yenilikçilik</li>
                                        <li>Topluma Katkı</li>
                                        <li>Sürdürülebilirlik</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold">
                                        Ekibimiz
                                    </h2>
                                    <p data-aos="fade-up" className="leading-8">
                                        Ekibimiz, her biri alanında uzmanlaşmış profesyonellerden oluşuyor. Her bir çalışanımız, müşteri memnuniyetini ön planda tutarak, sürekli yenilikçi çözümler üretmektedir.
                                    </p>
                                </div>
                                <button
                                    data-aos="fade-up"
                                    className="bg-primary hover:bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
                                >
                                    Hemen Başla
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDetail;