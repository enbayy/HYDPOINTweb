import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import sampleImage from "../../assets/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/urunler");
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff4e5] via-[#ffe9cc] to-white px-6 py-20">
      {/* Turuncu blur ışık efektleri */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff7f00] rounded-full blur-[180px] opacity-30 z-0 animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#ff7f00] rounded-full blur-[160px] opacity-20 z-0" />

      <div className="container mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Sol taraf */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left max-w-2xl space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-800 leading-tight">
            <span className="text-[#ff7f00]">HYD Point</span> ile <br />
            <span className="text-gray-900">Endüstriyel Gücünü Zirveye Taşı!</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gelişmiş alım-satım platformumuz ile ticaretin dijital gücünü keşfedin. 
            Hızlı, güvenli ve kullanıcı dostu çözümler ile işinizi büyütün.
          </p>
          <button
            onClick={handleClick}
            className="relative inline-block px-8 py-3 font-semibold rounded-full bg-[#ff7f00] text-white shadow-md hover:bg-[#e66f00] transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">Ürünleri Keşfet</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
          </button>
        </motion.div>

        {/* Sağ taraf */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md flex justify-center"
        >
          <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-lg shadow-2xl border border-orange-100">
            <img
              src={sampleImage}
              alt="HYD Ürün"
              className="rounded-xl object-contain max-h-[420px] w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
