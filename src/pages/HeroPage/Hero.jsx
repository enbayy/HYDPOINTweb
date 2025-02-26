import malzeme1 from "../../assets/malzeme.png";
import malzeme2 from "../../assets/malzeme.png";
import bgImage from "../../assets/fabrika.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ theme }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/urunler");
  };

  return (
    <div className="relative dark:bg-black dark:text-white duration-300 min-h-screen flex items-center py-6 sm:py-10">
      <img
        src={bgImage}
        alt="HYD POINT"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
      <div className="container flex flex-col items-center justify-between relative z-10 w-full px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 sm:space-y-6 max-w-xl text-center sm:text-left"
        >
          <p className="text-primary text-2xl sm:text-3xl font-semibold tracking-wide">
            Kolay ve Hızlı
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-bold font-serif drop-shadow-lg">
            HYD POINT ENDUSTRIYEL
          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            HYD Point, alım satım işlemlerinizi hızlı ve güvenli bir şekilde yapmanızı sağlar. Yüksek kaliteli hizmet ve geniş ürün yelpazesi ile sizlere en iyi pazarlama çözümlerini sunuyoruz.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 sm:py-3 px-6 sm:px-8 text-black font-medium shadow-lg"
          >
            Hemen Başla
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg mt-6"
        >
          <img
            src={theme === "dark" ? malzeme1 : malzeme2}
            alt="Company Image"
            className="scale-100 sm:scale-110 max-h-[350px] sm:max-h-[450px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;