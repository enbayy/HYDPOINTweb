import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaTools } from "react-icons/fa";

const HeroSection = () => {
  const titleWords = [
    { text: "Hyd Point", color: "#f97316" },
    { text: "Endüstriyel", color: "#f97316" },
    { text: "ile", color: "#1e3a8a" },
    { text: "Güçlü", color: "#1e3a8a" },
    { text: "ve", color: "#1e3a8a" },
    { text: "Sürdürülebilir", color: "#1e3a8a" },
    { text: "Çözümler", color: "#1e3a8a" },
  ];

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, type: "spring", stiffness: 90, damping: 12 },
    }),
  };

  return (
    <section
      role="region"
      aria-label="Ana sayfa kahraman bölümü"
      className="relative w-full min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-6 sm:px-12 overflow-hidden"
    >
      <motion.svg
        animate={{ rotate: [0, 10, 0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-64 h-64 opacity-10 text-[#f97316]"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M50,-50C65,-35,75,-17,75,0C75,17,65,35,50,50C35,65,17,75,0,75C-17,75,-35,65,-50,50C-65,35,-75,17,-75,0C-75,-17,-65,-35,-50,-50C-35,-65,-17,-75,0,-75C17,-75,35,-65,50,-50Z"
          transform="translate(100 100)"
        />
      </motion.svg>
      <motion.svg
        animate={{ y: [0, -8, 0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10 text-[#1e3a8a]"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M50,-50C65,-35,75,-17,75,0C75,17,65,35,50,50C35,65,17,75,0,75C-17,75,-35,65,-50,50C-65,35,-75,17,-75,0C-75,-17,-65,-35,-50,-50C-35,-65,-17,-75,0,-75C17,-75,35,-65,50,-50Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      <motion.div
        className="text-center max-w-3xl flex flex-col gap-6 text-[#1e3a8a] font-sans z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="uppercase text-sm tracking-widest text-[#f97316] font-semibold select-none">
          Endüstriyel Çözümlerde Lider
        </p>

        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight relative inline-block"
          aria-label="Hyd Point Endüstriyel ile Güçlü ve Sürdürülebilir Çözümler"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="inline-block mr-2"
              style={{ color: word.color }}
            >
              {word.text}
            </motion.span>
          ))}
          <motion.span
            className="block h-1 w-full bg-[#f97316] rounded mt-2 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          />
        </h1>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light max-w-xl mx-auto select-text">
          Endüstriyel süreçlerinizi daha verimli ve akıllı hale getirin.
          <br className="hidden md:inline" />
          Teknoloji, kalite ve güven burada buluşuyor.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
          <motion.button
            type="button"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 14px 24px rgba(249,115,22,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Hemen Teklif Alın"
          >
            Hemen Teklif Alın
            <motion.span
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowRight className="text-sm" />
            </motion.span>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 14px 24px rgba(30,58,138,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white text-[#1e3a8a] px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 transition duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Hizmetlerimiz"
          >
            <motion.span
              whileHover={{ rotate: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTools className="text-sm" />
            </motion.span>
            Hizmetlerimiz
          </motion.button>
        </div>

        <footer className="mt-14 text-sm text-gray-400 font-light select-none tracking-wide" aria-hidden="true">
          © 2025 Hyd Point Endüstriyel | Tüm Hakları Saklıdır.
        </footer>
      </motion.div>
    </section>
  );
};

export default HeroSection;