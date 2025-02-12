import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/HeroPage/Hero.jsx";
import Footer from "./components/Footer/Footer";
import AllProductList from "./pages/ProductPage/AllProductList.jsx";
import About from "./pages/AboutPage/About.jsx";
import Contact from "./pages/ContactPage/Contact.jsx";
import Services from "./pages/ServicesPage/Services.jsx";
import MachineList from "./pages/ProductPage/ProductList.jsx";
import Testimonial from "./pages/TestimonialPage/Testimonial.jsx";
import AboutDetail from "./pages/AboutPage/AboutDetailPage.jsx";
import ProductDetail from "./pages/ProductPage/ProductDetail.jsx";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
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
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<>
            <Hero theme={theme} />
            <About />
            <Services />
            <MachineList />
            <Testimonial />
          </>} />
          <Route path="/urunler" element={<AllProductList />} />
          <Route path="/urunler/detay/:id" element={<ProductDetail />} />
          <Route path="/hakkimizda" element={<AboutDetail />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        <Footer />
        <div className="fixed bottom-0 right-0 z-30">
          <button
            onClick={() => {
              setShowSocialIcons(!showSocialIcons);
              setIsOpen(!isOpen);
            }}
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg mb-2 transition-transform"
          >
            {isOpen ? <IoIosArrowBack size={20} /> : <IoIosArrowForward size={20} />}
          </button>
          <div
            className={`flex flex-col space-y-2 transition-transform ${showSocialIcons ? "translate-x-0" : "translate-x-full"
              }`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <a
              href="https://wa.me/905522312086"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform"
            >
              <RiWhatsappFill size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white p-4 rounded-full shadow-lg transition-transform"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white p-4 rounded-full shadow-lg transition-transform"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;