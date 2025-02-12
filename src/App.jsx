import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Testimonial from "./pages/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import MachineList from "./pages/ProductList/ProductList";
import Urunler from "./pages/ProductList/AllProductList";
import ProductDetail from "./pages/ProductList/ProductDetail";

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
            <Contact />
            <Footer />
          </>} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/urunler/detay" element={<ProductDetail />} />
          <Route path="/urunler/detay/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;