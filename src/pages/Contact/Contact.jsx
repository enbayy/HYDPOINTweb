import React, { useState } from "react";

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
    // Form verisini işleme (API'ye gönderme, vb.)
    alert("Form başarıyla gönderildi!");
  };

  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-800 py-8 px-6 rounded-lg shadow-lg">
            <div className="col-span-2 sm:col-span-1 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Alım Satım İhtiyaçlarınızı Birlikte Karşılayalım
              </h1>
              <p className="text-gray-400">
                HYD POINT olarak, alım satım sektöründeki deneyimimizle
                sizlere en iyi çözümleri sunmak için buradayız. İşletmenizin
                büyümesine katkı sağlamak için bizimle iletişime geçin.
              </p>
            </div>
            <div className="sm:col-span-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-white block mb-2 font-semibold"
                  >
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md text-black"
                    required
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 font-semibold"
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md text-black"
                    required
                    placeholder="E-posta adresinizi girin"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-white block mb-2 font-semibold"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md text-black"
                    required
                    placeholder="Alım satım ihtiyaçlarınızla ilgili mesajınızı buraya yazın"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block font-semibold py-3 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded-md"
                  >
                    Mesajı Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
