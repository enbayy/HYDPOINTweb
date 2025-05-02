import { Mail, Phone } from 'lucide-react';
import React from 'react';

const NavbarUp = () => {
    return (
        <div className="bg-primary dark:bg-black flex items-center justify-center text-white">
            <div className="container mx-auto px-4 py-2">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-center md:justify-start mb-4 md:mb-0">
                        <Phone className="text-white" size={30} />
                        <div>
                            <p className="text-white font-semibold">TELEFON:</p>
                            <p className="text-white font-semibold">0 533 600 03 62</p>
                        </div>
                        <Phone className="text-white" size={30} />
                        <div>
                            <p className="text-white font-semibold">TELEFON:</p>
                            <p className="text-white font-semibold">0 542 510 42 82</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-center md:justify-end">
                        <Mail className="text-white" size={30} />
                        <div>
                            <p className="text-white font-semibold">MAİL:</p>
                            <a
                                href="mailto:info@hydpoint.com"
                                className="text-white hover:underline font-semibold"
                            >
                                info@hydpoint.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarUp;