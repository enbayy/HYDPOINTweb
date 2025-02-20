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

const FooterLinks = [
  {
    id: 1,
    title: "Anasayfa",
    link: "/",
  },
  {
    id: 2,
    title: "Ürünlerimiz",
    link: "/urunler",
  },
  {
    id: 3,
    title: "Hakkımızda",
    link: "/hakkimizda",
  },
  {
    id: 4,
    title: "İletişim",
    link: "/iletisim",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              HYD POINT ENDUSTRIYEL
            </h1>
            <p className="text-sm">
              Alım satım sektöründe geniş deneyime sahip olan HYD POINT,
              size en uygun çözümü sunmak için burada. Pazarlama ve satış
              stratejilerinizde size yardımcı olmaya hazırız.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Konya</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>(+90) 533 600 03 62</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>(+90) 542 510 42 82</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaWhatsapp className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaSquareXTwitter className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Hızlı Erişim
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200 flex items-center"
                      >
                        <span>&#11162;</span>
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
                  İletişim
                </h1>
                <ul className="flex flex-col gap-3">
                  {[
                    { title: "info@hydpoint.com" },
                    { title: "(+90) 533 600 03 62" },
                    { title: "(+90) 555 123 45 67" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <p className="flex items-center gap-1">
                        <span>&#11162;</span>
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
                  Konum
                </h1>
                <div className="text-gray-500 dark:text-gray-200">
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