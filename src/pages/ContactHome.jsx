import { Globe, Mail, MapPin, Phone } from 'lucide-react';

const ContactHome = () => {
    return (
        <section>
            <div className="container p-8 rounded-xl">
                <h2 style={{ fontFamily: "Inter, sans-serif" }} data-aos="fade-up" data-aos-delay="100" className="text-3xl font-bold text-black dark:text-white mb-6 font-sans">
                    İLETİŞİM BİLGİLERİ
                </h2>
                <div className="flex flex-col md:flex-col lg:flex-row items-start gap-8">
                    <div className="space-y-6 w-full lg:w-1/2">
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-6">
                            <MapPin />
                            <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-gray-700 dark:text-white font-semibold text-lg">
                                Fevziçakmak, Hüdai Cd. 131 DB, 42060 Karatay/Konya
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" className="flex items-start gap-6">
                            <Phone />
                            <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-gray-700 dark:text-white font-semibold text-lg">0542 510 4282</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="700" className="flex items-start gap-6">
                            <Phone />
                            <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-gray-700 dark:text-white font-semibold text-lg">0533 600 0362</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="900" className="flex items-start gap-6">
                            <Globe />
                            <a
                                href="https://www.hydpoint.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-lg font-semibold"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                www.hydpoint.com
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1100" className="flex items-start gap-6">
                            <Mail />
                            <a
                                href="mailto:info@hydpoint.com"
                                className="text-primary hover:underline text-lg font-semibold"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                info@hydpoint.com
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg w-full lg:w-1/2 mt-4 lg:-mt-14">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.179640574998!2d32.555686400000006!3d37.9028636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085fc1b13876b%3A0x17bfdbd2297b6fe0!2sMGTORK%20-%20Bur%C3%A7lu%20V%20Kasnak%20-%20Konik%20Bur%C3%A7%20-%20Kaplinler%20-%20Konik%20Kilitler!5e0!3m2!1str!2str!4v1740043587417!5m2!1str!2str"
                            width="100%"
                            height="350"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHome;