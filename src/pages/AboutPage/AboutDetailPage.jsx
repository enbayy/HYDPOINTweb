import React from "react";
import malzeme from "../../assets/malzeme.png";

const AboutDetail = () => {
    return (
        <section id="about-detail">
            <div className="dark:bg-dark bg-slate-100 sm:min-h-[800px] sm:grid sm:place-items-center duration-300">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                        <div data-aos="slide-right" data-aos-duration="1500">
                            <img
                                src={malzeme}
                                alt="Company Image"
                                className="sm:scale-125 sm:-translate-x-11 max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                            />
                        </div>
                        <div>
                            <div className="space-y-6 sm:p-16 pb-6">
                                <h1
                                    data-aos="fade-up"
                                    className="text-3xl sm:text-4xl font-bold font-serif"
                                >
                                    Hakkımızda
                                </h1>
                                <p data-aos="fade-up" className="leading-8 tracking-wide">
                                    HYD Point, alım satım işlemlerinde hızlı, güvenilir ve kaliteli çözümler sunan bir pazarlama şirketidir. İş ortaklarımıza en iyi ticaret deneyimini sağlamayı hedefliyoruz.
                                </p>
                                <p data-aos="fade-up">
                                    Sektördeki deneyimimiz ile geniş bir ürün yelpazesi ve stratejik çözümler sunarak, iş süreçlerinizi kolaylaştırıyor ve büyümenize katkı sağlıyoruz.
                                </p>

                                <div>
                                    <h2 className="text-2xl font-semibold" data-aos="fade-up">
                                        Vizyon ve Misyon
                                    </h2>
                                    <p data-aos="fade-up" className="leading-8">
                                        Vizyonumuz, sektördeki lider konumumuzu pekiştirerek, müşterilerimize her zaman değer katmak ve sürdürülebilir büyümeyi sağlamak. Misyonumuz ise, güvenilir ve kaliteli hizmet anlayışımızla ticaret dünyasında kalıcı bir iz bırakmaktır.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold" data-aos="fade-up">
                                        Değerlerimiz
                                    </h2>
                                    <ul className="list-disc pl-6" data-aos="fade-up">
                                        <li>Güvenilirlik</li>
                                        <li>Yenilikçilik</li>
                                        <li>Topluma Katkı</li>
                                        <li>Sürdürülebilirlik</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold" data-aos="fade-up">
                                        Ekibimiz
                                    </h2>
                                    <p data-aos="fade-up" className="leading-8">
                                        Ekibimiz, her biri alanında uzmanlaşmış profesyonellerden oluşuyor. Her bir çalışanımız, müşteri memnuniyetini ön planda tutarak, sürekli yenilikçi çözümler üretmektedir.
                                    </p>
                                </div>

                                <button data-aos="fade-up" className="button-outline">
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