import React from "react";
import { Navlinks } from "./Navbar";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, closeMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"} 
        fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
        bg-white dark:bg-black dark:text-white px-8 pb-6 pt-16 text-black 
        transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}
    >
      <nav className="mt-12">
        <ul className="space-y-4 text-xl">
          {Navlinks.map((data) => (
            <li key={data.name}>
              <Link to={data.link} onClick={closeMenu} className="mb-5 inline-block">
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <Link
          to="/iletisim"
          onClick={closeMenu}
          className="block bg-primary text-black px-4 py-2 rounded-lg text-center hover:bg-yellow-500 transition"
        >
          Hızlı Teklif Al
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveMenu;