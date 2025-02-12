import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom"; // Import Link component
import ResponsiveMenu from "./ResponsiveMenu";
import HYDPOINT from '../../assets/HYDPOINTENDUSTRIYEL.png';

export const Navlinks = [
  {
    id: 1,
    name: "ANASAYFA",
    link: "/",
  },
  {
    id: 2,
    name: "ÜRÜNLERİMİZ",
    link: "/urunler", // Update the link to /urunler
  },
  {
    id: 3,
    name: "HAKKIMIZDA",
    link: "/hakkimizda",
  },
  {
    id: 4,
    name: "İLETİŞİM",
    link: "/iletisim",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-50 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-1 md:py-0">
        <div className="flex justify-between items-center p-0">
          <div className="relative">
            <a href="">
              <img src={HYDPOINT} alt="HYDPOINT" className="w-48 h-16 object-contain cursor-pointer" />
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link} // Use Link instead of a regular <a> tag
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500 cursor-pointer"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
