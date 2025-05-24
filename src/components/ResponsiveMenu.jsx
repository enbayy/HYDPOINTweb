import React, { useState } from "react";
import { Navlinks } from "./Navbar";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, closeMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"} 
        fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
        bg-white dark:bg-black dark:text-white px-8 pb-6 text-black 
        transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}
    >
      <nav className="mt-12">
        <ul className="space-y-4 text-xl">
          {Navlinks.map((data) => (
            <li key={data.name}>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  if (data.submenu) {
                    toggleSubmenu(data.name);
                  } else {
                    closeMenu();
                  }
                }}
              >
                <Link
                  to={data.link}
                  onClick={data.submenu ? null : closeMenu}
                  className="mb-2 inline-block w-full"
                >
                  {data.name}
                </Link>

                {data.submenu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transition-transform duration-300 
                      ${openSubmenu === data.name ? "rotate-180 text-primary" : "rotate-90 text-black dark:text-white"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>

              {data.submenu && openSubmenu === data.name && (
                <ul className="ml-4 mt-2 space-y-2 text-base text-gray-700 dark:text-gray-300">
                  {data.submenu.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        to={sub.link}
                        onClick={closeMenu}
                        className="block hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <Link
          to="/iletisim"
          onClick={closeMenu}
          className="block text-lg font-semibold bg-primary text-black px-4 py-2 rounded-lg text-center hover:bg-yellow-500 transition"
        >
          Teklif Al
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveMenu;