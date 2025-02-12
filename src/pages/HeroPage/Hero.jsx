import malzeme1 from "../../assets/malzeme.png";
import malzeme2 from "../../assets/malzeme.png";
import bgImage from "../../assets/fabrika.jpg";
import { useNavigate } from "react-router-dom";

const Hero = ({ theme }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/urunler")
  }

  return (
    <div className="relative dark:bg-black dark:text-white duration-300 p-4">
      <img
        src={bgImage}
        alt="HYD POINT"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      <div className="container min-h-[620px] flex relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? malzeme1 : malzeme2}
              alt="Company Image"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p
              data-aos="fade-up"
              className="text-primary text-2xl font-serif"
            >
              Kolay ve Hızlı
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl text-white lg:text-7xl font-semibold font-serif drop-shadow-md"
            >
              HYD POINT ENDUSTRIYEL
            </h1>
            <p
              className="text-white text-lg"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              HYD Point, alım satım işlemlerinizi hızlı ve güvenli bir şekilde
              yapmanızı sağlar. Yüksek kaliteli hizmet ve geniş ürün yelpazesi
              ile sizlere en iyi pazarlama çözümleri sunuyoruz.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={handleClick}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Hemen Başla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;