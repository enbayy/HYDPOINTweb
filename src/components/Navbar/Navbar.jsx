import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import HYDPOINT from '../../assets/hydLogo2.png';

export const Navlinks = [
  {
    id: 1,
    name: "ANASAYFA",
    link: "/",
  },
  {
    id: 2,
    name: "ÜRÜNLERİMİZ",
    link: "/urunler",
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
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 shadow-lg bg-transparent dark:bg-black dark:text-white transition-all duration-300">
      <div className="container py-1 md:py-0">
        <div className="flex justify-between items-center p-1">
          <div className="relative">
            <a href="/">
              <img src={HYDPOINT} alt="HYDPOINT" className="w-48 h-16 p-1 object-contain cursor-pointer" />
            </a>
          </div>
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <Link
                    to={link}
                    className={`text-lg font-semibold py-2 px-3 rounded-lg transition-colors duration-300 cursor-pointer
                      ${location.pathname === link ? "text-primary border-b-4 border-primary" : "text-black dark:text-white hover:text-primary hover:border-b-4 hover:border-primary"}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <Link
                to="/iletisim"
                className="bg-primary text-white px-6 py-2 rounded-lg hidden lg:block hover:bg-yellow-500 transition-colors duration-300"
              >
                Hızlı Teklif Al
              </Link>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer transition-all"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer transition-all"
                />
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
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
      <ResponsiveMenu showMenu={showMenu} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;