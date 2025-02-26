import React from "react";
import malzeme from "../../assets/hydLogo.png";

const About = () => {
  return (
    <section id="about-detail">
      <div className="bg-white dark:bg-dark py-12 sm:grid sm:place-items-center duration-300">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
            <div data-aos="slide-right" data-aos-duration="1500">
              <img
                src={malzeme}
                alt="HYDPOINT"
                className="sm:scale-125 sm:-translate-x-11 max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
            <div>
              <div className="space-y-6 sm:p-16 pb-6">
                <p data-aos="fade-up" className="leading-8 tracking-wide">
                  HYD Point, ticaretin her aşamasında güvenilir ve kaliteli çözümler sunarak iş ortaklarına değer katar. Sektördeki deneyimimizle iş süreçlerini kolaylaştırıyor ve büyümeyi destekliyoruz.
                </p>
                <p data-aos="fade-up">
                  Güçlü altyapımızla stratejik çözümler sunuyor ve müşterilerimizin rekabetçi avantaj elde etmesine yardımcı oluyoruz. Yenilikçi yaklaşımımızla her zaman en iyi ticaret deneyimini sağlamayı amaçlıyoruz.
                </p>

                <p data-aos="fade-up" className="leading-8">
                  Vizyonumuz, sektördeki liderliğimizi sürdürmek, misyonumuz ise güvenilir hizmet anlayışımızla kalıcı başarılar elde etmektir. Her projede kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.
                </p>

                <p data-aos="fade-up" className="leading-8">
                  Ekibimiz, her biri alanında uzman profesyonellerden oluşuyor ve yenilikçi çözümlerle iş ortaklarımızın hedeflerine ulaşmalarını sağlıyoruz.
                </p>

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

export default About;