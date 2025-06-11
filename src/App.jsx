import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./pages/ScrollToTop.js";
import Loader from "./components/Loader.jsx";
import { FaWhatsapp } from 'react-icons/fa';
import ContactHome from "./pages/ContactHome.jsx";
import HidrolikPage from "./pages/Urunler/HidrolikPage.jsx";
import PnomatikPage from "./pages/Urunler/PnomatikPage.jsx";
import SizdirmazlikPage from "./pages/Urunler/SizdirmazlikPage.jsx";
import GucAktarimPage from "./pages/Urunler/GucAktarimPage.jsx";
import Slider from "./components/Slider.jsx";
import SearchInput from "./components/SearchInput.jsx";
import FeaturedProducts from "./pages/FeaturedProducts.jsx";
import ScrollToTopButton from "./pages/ScrollToTopButton.jsx";

const Hero = lazy(() => import("./pages/HeroPage/Hero.jsx"));
const AllProductList = lazy(() => import("./pages/ProductPage/AllProductList.jsx"));
const About = lazy(() => import("./pages/AboutPage/About.jsx"));
const Contact = lazy(() => import("./pages/ContactPage/Contact.jsx"));
const Services = lazy(() => import("./pages/ServicesPage/Services.jsx"));
const AboutDetail = lazy(() => import("./pages/AboutPage/AboutDetailPage.jsx"));
const ProductDetail = lazy(() => import("./pages/ProductPage/ProductDetail.jsx"));
const Book = lazy(() => import("./pages/PageFlip.jsx"));
const CTASection = lazy(() => import("./pages/ctaPage/cta.jsx"));

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <PageTransition>
                <SearchInput />
                <Slider />
                <Hero />
                <About />
                <FeaturedProducts />
                <ContactHome />
              </PageTransition>
            }
          />
          <Route path="/urunler" element={<PageTransition><AllProductList /></PageTransition>} />
          <Route path="/urunler/detay/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
          <Route path="/hakkimizda" element={<PageTransition><AboutDetail /></PageTransition>} />
          <Route path="/iletisim" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/hidrolik" element={<PageTransition><HidrolikPage /></PageTransition>} />
          <Route path="/pnomatik" element={<PageTransition><PnomatikPage /></PageTransition>} />
          <Route path="/sizdirmazlik" element={<PageTransition><SizdirmazlikPage /></PageTransition>} />
          <Route path="/guc-aktarim" element={<PageTransition><GucAktarimPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden selection:bg-orange-500 selection:text-white">
        <Navbar theme={theme} setTheme={setTheme} />
        <Suspense fallback={<Loader />}>
          <AnimatedRoutes />
        </Suspense>
        <ScrollToTopButton />
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
          <button
            onClick={() => setShowWhatsApp(!showWhatsApp)}
            className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            {showWhatsApp ? "Kapat" : "WhatsApp İletişim"}
          </button>
          {showWhatsApp && (
            <div className="flex flex-col gap-2">
              {[
                { label: "Tansu Çağlar TEMİZ", number: "0 533 600 03 62", link: "https://wa.me/905336000362" },
                { label: "Mustafa ÖZDEM", number: "0 542 510 42 82", link: "https://wa.me/905425104282" }
              ].map(({ label, number, link }) => (
                <button
                  key={number}
                  onClick={() => window.open(link, "_blank")}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-md bg-green-600 hover:bg-green-700 text-white text-sm transition-all duration-300"
                  aria-label={`WhatsApp ile iletişim kur: ${label}`}
                >
                  <FaWhatsapp size={20} />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-xs">{label}</span>
                    <span className="text-xs opacity-90">{number}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;