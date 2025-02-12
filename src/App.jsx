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

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
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
        <a
          href="https://wa.me/905522312086"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-30"
        >
          <RiWhatsappFill size={30} />
        </a>
      </div>
    </Router>
  );
};

export default App;