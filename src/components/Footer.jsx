import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import logo from "../assets/hydLogo2.png"

const FooterLinks = [
  {
    id: 1,
    title: "ANASAYFA",
    link: "/",
  }, {
    id: 2,
    title: "HİDROLİK",
    link: "/hidrolik",
  }, {
    id: 3,
    title: "PNÖMATİK",
    link: "/pnomatik",
  }, {
    id: 4,
    title: "SIZDIRMAZLIK",
    link: "/sizdirmazlik",
  }, {
    id: 5,
    title: "GÜÇ AKTARIM",
    link: "/guc-aktarim",
  },
  {
    id: 6,
    title: "ÜRÜNLERİMİZ",
    link: "/urunler",
  },
  {
    id: 7,
    title: "HAKKIMIZDA",
    link: "/hakkimizda",
  },
  {
    id: 8,
    title: "İLETİŞİM",
    link: "/iletisim",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <div className="text-left">
              <img
                src={logo}
                alt="logo"
                className="max-w-[300px] h-auto mb-4"
              />
            </div>
            <p className="text-sm text-black">
              Alım satım sektöründe geniş deneyime sahip olan HYD POINT,
              size en uygun çözümü sunmak için burada. Pazarlama ve satış
              stratejilerinizde size yardımcı olmaya hazırız.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>(+90) 533 600 03 62</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>(+90) 542 510 42 82</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  HIZLI ERİŞİM
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-black dark:text-gray-200 flex items-center"
                      >
                        <IoMdArrowDropright />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  İLETİŞİM
                </h1>
                <ul className="flex flex-col gap-3">
                  {[
                    { title: "info@hydpoint.com" },
                    { title: "(+90) 533 600 03 62" },
                    { title: "(+90) 555 123 45 67" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="space-x-1 text-black dark:text-gray-200"
                    >
                      <p className="flex items-center gap-1">
                        <IoMdArrowDropright />
                        <span>{item.title}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-8">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  KONUM
                </h1>
                <div className="text-black dark:text-gray-200">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Fevziçakmak, Hüdai Cd. 131 DB, 42060 Karatay/Konya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;