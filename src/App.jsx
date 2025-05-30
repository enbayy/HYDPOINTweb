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
                <CTASection />
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
        <div className="fixed bottom-2 right-2 z-50 flex flex-col gap-2">
          {[
            { numara: "0 533 600 03 62", link: "https://wa.me/905336000362" },
            { numara: "0 542 510 42 82", link: "https://wa.me/905425104282" }
          ].map(({ numara, link }) => (
            <div
              key={numara}
              onClick={() => window.open(link, "_blank")}
              className="whatsapp-bubble h-8 w-44"
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') window.open(link, "_blank") }}
            >
              <FaWhatsapp size={20} />
              <span className="text-sm">{numara}</span>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;