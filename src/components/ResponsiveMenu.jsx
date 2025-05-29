import React, { useState } from "react";
import { Navlinks } from "./Navbar";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, closeMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {showMenu && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300"
          onClick={closeMenu}
          style={{ opacity: showMenu ? 1 : 0 }}
        ></div>
      )}

      <div
        className={`
          fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
          bg-white dark:bg-black dark:text-white px-8 pb-6 text-black 
          rounded-r-xl shadow-md lg:hidden

          transform transition-transform duration-500 ease-in-out
          ${showMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-2xl font-bold text-black dark:text-white hover:text-primary transition"
          aria-label="Close Menu"
        >
          &times;
        </button>

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
                        ${
                          openSubmenu === data.name
                            ? "rotate-180 text-primary"
                            : "rotate-90 text-black dark:text-white"
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
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
      </div>
    </>
  );
};

export default ResponsiveMenu;