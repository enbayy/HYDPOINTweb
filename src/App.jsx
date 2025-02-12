import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // createBrowserRouter ve RouterProvider'ı import et
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Testimonial from "./pages/Testimonial/Testimonial";
import MachineList from "./pages/MachineList/MachineList";

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

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Yönlendirme yapılandırmasını oluştur
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Navbar theme={theme} setTheme={setTheme} />
          <Hero theme={theme} />
          <About />
          <Services />
          <MachineList />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      ),
    },
    {
      path: "/urunler",
      element: (
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Navbar theme={theme} setTheme={setTheme} />
          <MachineList />
          <Footer />
        </div>
      ),
    },
    {
      path: "/hakkimizda",
      element: (
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Navbar theme={theme} setTheme={setTheme} />
          <About />
          <Footer />
        </div>
      ),
    },
    {
      path: "/iletisim",
      element: (
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Navbar theme={theme} setTheme={setTheme} />
          <Contact />
          <Footer />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
