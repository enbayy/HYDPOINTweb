import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import createBrowserRouter
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Testimonial from "./pages/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import MachineList from "./pages/MachineList/MachineList"; // Import your new page

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

  // Set up routes with createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
          <Navbar theme={theme} setTheme={setTheme} />
          <Hero theme={theme} />
          <About />
          <Services />
          <MachineList /> {/* Page for products */}
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      ),
    },
    {
      path: "/urunler", // The path for the new page
      element: <MachineList />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
