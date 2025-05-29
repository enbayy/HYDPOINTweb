import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import HYDPOINT from '../assets/hydLogo2.png';

export const Navlinks = [
  {
    id: 1,
    name: "ANASAYFA",
    link: "/",
  },
  {
    id: 1,
    name: "HİDROLİK",
    link: "/detail/hidrolik",
    submenu: [
      { id: 11, name: "hidrolik1", link: "/hidrolik/hidrolik1" },
      { id: 12, name: "hidrolik2", link: "/hidrolik/hidrolik2" },
      { id: 13, name: "hidrolik3", link: "/hidrolik/hidrolik3" },
    ],
  },
  {
    id: 1,
    name: "PNÖMATİK",
    link: "/detail/pnomatik",
    submenu: [
      { id: 21, name: "pnomatik1", link: "/pnomatik/pnomatik1" },
      { id: 22, name: "pnomatik2", link: "/pnomatik/pnomatik2" },
      { id: 23, name: "pnomatik3", link: "/pnomatik/pnomatik3" },
    ],
  },
  {
    id: 1,
    name: "SIZDIRMAZLIK",
    link: "/detail/sizdirmazlik",
    submenu: [
      { id: 31, name: "sizdirmazlik1", link: "/sizdirmazlik/sizdirmazlik1" },
      { id: 32, name: "sizdirmazlik2", link: "/sizdirmazlik/sizdirmazlik2" },
      { id: 33, name: "sizdirmazlik3", link: "/sizdirmazlik/sizdirmazlik3" },
    ],
  },
  {
    id: 1,
    name: "GÜÇ AKTARIM",
    link: "/detail/guc-aktarim",
    submenu: [
      { id: 41, name: "güc-aktarim1", link: "/güc-aktarim/güc-aktarim1" },
      { id: 42, name: "güc-aktarim2", link: "/güc-aktarim/güc-aktarim2" },
      { id: 43, name: "güc-aktarim3", link: "/güc-aktarim/güc-aktarim3" },
    ],
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
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-black dark:text-white transition-all duration-300">
      <div className="container py-1 md:py-0">
        <div className="flex justify-between items-center p-1">
          <div className="relative">
            <a href="/">
              <img src={HYDPOINT} alt="HYDPOINT" className="w-48 h-16 p-1 object-contain cursor-pointer" />
            </a>
          </div>
          <nav className="hidden lg:flex">
            <ul className="flex items-center justify-center gap-8">
              {Navlinks.map(({ id, name, link, submenu }) => (
                <li
                  key={id + name}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    to={link}
                    className={`block text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer text-center
            ${location.pathname === link
                        ? "text-primary border-b-4 border-primary"
                        : "text-black dark:text-white hover:text-primary hover:border-b-4 hover:border-primary"
                      }`}
                    style={{ minWidth: "100px" }}
                  >
                    {name}
                  </Link>

                  {submenu && (
                    <ul
                      className={`absolute top-full left-0 mt-2 bg-white dark:bg-gray-900 shadow-xl rounded-lg min-w-[200px] z-50
            transform transition-all duration-300 ease-in-out
            ${hoveredMenu === name
                          ? "opacity-100 visible translate-y-0 scale-100"
                          : "opacity-0 invisible -translate-y-2 scale-95"
                        }
            border dark:border-gray-700`}
                    >
                      {submenu.map((sub) => (
                        <li
                          key={sub.id}
                          className="px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-200 whitespace-nowrap"
                        >
                          <Link to={sub.link}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
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