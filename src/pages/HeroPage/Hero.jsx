import hydlogo4 from "../../assets/hydlogo4.png";
import hydlogo5 from "../../assets/hydlogo4.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ theme }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/urunler");
  };

  return (
    <div className="container relative dark:bg-black dark:text-white duration-300 flex items-center py-8 sm:py-12 md:py-32">
      <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 w-full px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 sm:space-y-6 max-w-xl text-center lg:text-left"
        >
          <p className="text-primary text-2xl sm:text-3xl font-bold font-serif tracking-wide">
            KOLAY VE HIZLI
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black font-bold font-serif drop-shadow-lg">
            HYD POINT ENDUSTRIYEL
          </h1>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            HYD Point, alım satım işlemlerinizi hızlı ve güvenli bir şekilde yapmanızı sağlar. Yüksek kaliteli hizmet ve geniş ürün yelpazesi ile sizlere en iyi pazarlama çözümlerini sunuyoruz.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 sm:py-3 px-6 sm:px-8 text-white font-medium shadow-lg"
          >
            Hemen Başla
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg mt-6 lg:mt-0"
        >
          <img
            src={theme === "dark" ? hydlogo4 : hydlogo5}
            alt="Company Image"
            className="sm:scale-125 sm:-translate-x-11 max-h-[350px] sm:max-h-[400px] lg:max-h-[450px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
