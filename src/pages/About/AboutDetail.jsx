import React from "react";
import malzeme from "../../assets/malzeme.png";

const AboutDetail = () => {
    return (
        <section id="hakkimizda" className="bg-light-gray pb-16">
            <div className="dark:bg-dark bg-slate-100 sm:min-h-[1000px] sm:grid sm:place-items-center duration-300">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                        <div data-aos="slide-right" data-aos-duration="1500">
                            <img
                                src={malzeme}
                                alt="Company Image"
                                className="sm:scale-125 sm:-translate-x-11 max-h-[450px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                            />
                        </div>
                        <div>
                            <div className="space-y-5 sm:p-16 pb-6">
                                <h1
                                    data-aos="fade-up"
                                    className="text-3xl sm:text-4xl font-bold font-serif"
                                >
                                    Hakkımızda - Detaylı Bilgiler
                                </h1>
                                <p data-aos="fade-up" className="leading-8 tracking-wide">
                                    HYD Point, 2024 yılında, sektördeki uzun yıllara dayanan tecrübeye sahip profesyoneller tarafından kuruldu. Her biri kendi alanında uzmanlaşmış liderlerden oluşan ekibimiz, güçlü bir vizyon ve stratejiyle sektörde fark yaratmayı hedefliyor. Amacımız, her iş ortağımıza en iyi ticaret deneyimini sunmak ve her aşamada yanlarında olmak.
                                </p>
                                <p data-aos="fade-up">
                                    Uzun yıllara dayanan pazarlama sektörü deneyimimizle, müşteri portföyümüzü genişleterek, iş süreçlerinizi daha verimli hale getiren stratejik çözümler sunuyoruz. Teknolojik altyapımız ve güçlü iş ortaklıklarımız sayesinde, hızla büyüyen bir pazarda kendimize sağlam bir yer edinmeyi amaçlıyoruz.
                                </p>
                                <p data-aos="fade-up">
                                    İş modelimizde müşteri memnuniyetini her zaman ön planda tutarak, iş ortaklarımıza özel, kişiselleştirilmiş çözümler sunuyoruz. Yenilikçi, hızlı, güvenilir ve kaliteli hizmet anlayışımızla sektörde lider bir marka olmayı hedefliyoruz.
                                </p>
                                <button data-aos="fade-up" className="button-outline">
                                    Hemen Başla
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Vizyon ve Misyon */}
                    <div className="space-y-5 sm:p-16 pb-6 mt-16">
                        <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold font-serif">
                            Vizyon ve Misyon
                        </h2>
                        <p data-aos="fade-up" className="leading-8 tracking-wide">
                            <strong>Vizyon:</strong> HYD Point, teknoloji ve müşteri odaklı yaklaşımlarıyla sektördeki en güvenilir çözüm ortağı olmayı hedeflemektedir. Sürekli gelişen pazar ihtiyaçlarına en hızlı şekilde yanıt vererek, küresel çapta tanınan bir marka olmayı amaçlıyoruz.
                        </p>
                        <p data-aos="fade-up" className="leading-8 tracking-wide">
                            <strong>Misyon:</strong> Müşterilerimize en iyi ticaret deneyimini sunmak, sektördeki en iyi çözümleri sağlamak ve iş ortaklarımızla uzun vadeli ilişkiler kurarak sürdürülebilir büyümeyi sağlamak.
                        </p>
                    </div>

                    {/* Şirket Tarihçesi */}
                    <div className="space-y-5 sm:p-16 pb-6 mt-16">
                        <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold font-serif">
                            Şirket Tarihçesi
                        </h2>
                        <p data-aos="fade-up" className="leading-8 tracking-wide">
                            HYD Point, 2024 yılında, sektördeki uzun yıllara dayanan tecrübeye sahip bir grup profesyonel tarafından kuruldu. Her biri kendi alanında uzmanlaşmış liderlerden oluşan ekibimiz, zengin deneyim ve stratejik vizyonlarıyla bu yeni girişimi hayata geçirdi. Başlangıçta yerel pazarda faaliyet göstermeyi planlayan firmamız, hızla büyüyerek küresel pazara adım atmayı hedefliyor.
                        </p>
                        <p data-aos="fade-up" className="leading-8 tracking-wide">
                            Kuruluşumuz, yalnızca geçmişin birikimiyle değil, aynı zamanda yenilikçi ve dinamik bir yaklaşımla şekillendi. Her biri alanında iz bırakmış uzman kadromuz, sektördeki güçlü bağlantıları ve sağlam bilgi birikimleriyle HYD Point’i kısa sürede güvenilir bir marka haline getirmeyi hedeflemektedir.
                        </p>
                    </div>

                    {/* Hizmetler */}
                    <div className="space-y-5 sm:p-16 pb-6 mt-16">
                        <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold font-serif">
                            Hizmetlerimiz
                        </h2>
                        <ul data-aos="fade-up" className="space-y-4">
                            <li className="flex items-start">
                                <span className="mr-4 text-xl text-[#1d9bf0]">📦</span>
                                <div>
                                    <strong>Ürün Tedarik ve Satış:</strong> Geniş ürün yelpazemizle, yüksek kalite standartlarına sahip ürünlerin tedarik ve satışını yapmaktayız. Her müşterimize özel çözümler üretiyoruz.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-4 text-xl text-[#1d9bf0]">💻</span>
                                <div>
                                    <strong>Dijital Pazarlama ve Strateji:</strong> Güçlü dijital pazarlama stratejileri ile markaların çevrimiçi görünürlüğünü artırıyor ve hedef kitlelere ulaşmalarını sağlıyoruz.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-4 text-xl text-[#1d9bf0]">🌍</span>
                                <div>
                                    <strong>Uluslararası Ticaret:</strong> Küresel pazarda faaliyet gösteriyor ve iş ortaklarımıza uluslararası ticaret fırsatları sunuyoruz. Yurt dışı stratejik ortaklıklar ve lojistik çözümler sağlıyoruz.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Ekip */}
                    <div className="space-y-5 sm:p-16 pb-6 mt-16">
                        <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold font-serif">
                            Ekibimiz
                        </h2>
                        <p data-aos="fade-up" className="leading-8 tracking-wide">
                            HYD Point, sektörün liderlerinden oluşan deneyimli bir ekip tarafından yönetilmektedir. Her biri alanında uzman profesyonellerden oluşan ekibimiz, iş süreçlerimizi sürekli olarak iyileştirmek ve yenilikçi çözümler geliştirmek için çalışmaktadır.
                        </p>
                        <ul data-aos="fade-up" className="space-y-4">
                            <li>
                                <strong>XXXXXX</strong> - XXXXXX
                            </li>
                            <li>
                                <strong>XXXXXX</strong> - XXXXXX
                            </li>
                            <li>
                                <strong>XXXXXX</strong> - XXXXXX
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDetail;
