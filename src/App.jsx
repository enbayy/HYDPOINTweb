import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./pages/ScrollToTop.js";
import Loader from "./components/Loader.jsx";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Hero />
              <About />
              <Book />
              <Services />
              <CTASection />
            </PageTransition>
          }
        />
        <Route path="/urunler" element={<PageTransition><AllProductList /></PageTransition>} />
        <Route path="/urunler/detay/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/hakkimizda" element={<PageTransition><AboutDetail /></PageTransition>} />
        <Route path="/iletisim" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showSocialIcons, setShowSocialIcons] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <Suspense fallback={<Loader />}>
          <AnimatedRoutes />
        </Suspense>
        <div className="fixed bottom-0 right-0 z-30">
          <button
            onClick={() => {
              setShowSocialIcons(!showSocialIcons);
              setIsOpen(!isOpen);
            }}
            className="bg-white text-black hover:bg-primary hover:text-white p-4 rounded-full shadow-lg mb-2 transition-transform"
          >
            {isOpen ? <IoIosArrowBack size={20} /> : <IoIosArrowForward size={20} />}
          </button>
          <div
            className={`flex flex-col space-y-2 transition-transform ${showSocialIcons ? "translate-x-0" : "translate-x-full"
              }`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <a
              href="https://wa.me/905336000362"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform hover:bg-primary"
            >
              <RiWhatsappFill size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white p-4 rounded-full shadow-lg transition-transform hover:bg-primary"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:bg-primary"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-full shadow-lg transition-transform hover:bg-primary"
            >
              <FaSquareXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;