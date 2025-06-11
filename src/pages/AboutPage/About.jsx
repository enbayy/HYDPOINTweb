import React from "react";
import malzeme from "../../assets/hydLogo.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/iletisim")
  }
  return (
    <section id="about-detail">
      <div className="container bg-white dark:bg-black py-12 sm:grid sm:place-items-center duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={malzeme}
              alt="HYDPOINT"
              className="sm:scale-125 sm:-translate-x-11 max-h-[400px] drop-shadow-[3px_4px_4px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-6 sm:p-16 pb-6 text-lg">
              <p data-aos="fade-up" className="leading-8 tracking-wide font-inter">
                HYD Point, ticaretin her aşamasında güvenilir ve kaliteli çözümler sunarak iş ortaklarına değer katar. Sektördeki deneyimimizle iş süreçlerini kolaylaştırıyor ve büyümeyi destekliyoruz.
              </p>
              <p data-aos="fade-up" className="leading-8 tracking-wide font-inter">
                Güçlü altyapımızla stratejik çözümler sunuyor ve müşterilerimizin rekabetçi avantaj elde etmesine yardımcı oluyoruz. Yenilikçi yaklaşımımızla her zaman en iyi ticaret deneyimini sağlamayı amaçlıyoruz.
              </p>
              <p data-aos="fade-up" className="leading-8 tracking-wide font-inter">
                Vizyonumuz, sektördeki liderliğimizi sürdürmek, misyonumuz ise güvenilir hizmet anlayışımızla kalıcı başarılar elde etmektir. Her projede kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.
              </p>
              <p data-aos="fade-up" className="leading-8 tracking-wide font-inter">
                Ekibimiz, her biri alanında uzman profesyonellerden oluşuyor ve yenilikçi çözümlerle iş ortaklarımızın hedeflerine ulaşmalarını sağlıyoruz.
              </p>
              <button onClick={handleClick} data-aos="fade-up" className="button-outline font-inter">
                Hemen Başla
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;