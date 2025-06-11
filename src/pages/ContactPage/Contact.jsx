import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form başarıyla gönderildi!");
  };

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="py-8 dark:bg-black dark:text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            <div className="p-8 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black dark:text-white font-inter">İLETİŞİME GEÇİN</h2>
              <p className="text-gray-500 dark:text-white font-poppins">
                Alım satım ihtiyaçlarınızı bize bildirerek en iyi çözümü
                alabilirsiniz. Size nasıl yardımcı olabiliriz?
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-black dark:text-white block mb-2 font-medium font-inter"
                  >
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-md text-black shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-black dark:text-white block mb-2 font-medium font-inter"
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-md text-black shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                    placeholder="E-posta adresinizi girin"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-black dark:text-white block mb-2 font-medium font-inter"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 h-40 rounded-md text-black shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                    placeholder="Mesajınızı buraya yazın"
                  >
                  </textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block font-semibold py-3 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded-md shadow-lg font-inter"
                  >
                    Mesajı Gönder
                  </button>
                </div>
              </form>
            </div>
            <div className="p-8 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black dark:text-white font-inter">BİZE ULAŞIN</h2>
              <p className="text-gray-500 dark:text-white font-poppins">
                HYD POINT olarak alım satım sektöründe sizinle çalışmaktan büyük mutluluk duyarız.
                Bizimle iletişime geçmek için aşağıdaki numaraları kullanabilirsiniz.
              </p>

              <p className="text-black dark:text-white font-poppins">
                Daha fazla bilgi almak için aşağıdaki numaralardan bize ulaşabilirsiniz.
              </p>

              <div className="text-black dark:text-white space-y-4">
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p className="font-inter">(+90) 533 600 03 62</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p className="font-inter">(+90) 542 510 42 82</p>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.179640574998!2d32.555686400000006!3d37.9028636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085fc1b13876b%3A0x17bfdbd2297b6fe0!2sMGTORK%20-%20Bur%C3%A7lu%20V%20Kasnak%20-%20Konik%20Bur%C3%A7%20-%20Kaplinler%20-%20Konik%20Kilitler!5e0!3m2!1str!2str!4v1740043587417!5m2!1str!2str"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;