import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import resim1 from "../assets/hydLogo2.png";
import resim2 from "../assets/hydLogo2.png";
import resim3 from "../assets/hydLogo2.png";
import resim4 from "../assets/hydLogo2.png";
import resim5 from "../assets/hydLogo2.png";

const SliderComponent = () => {
    const sliderImages = [resim1, resim2, resim3, resim4, resim5];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: () => <div className="custom-dot"></div>,
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <div className="container w-full flex flex-col justify-center items-center ">
            <div className="w-full max-w-6xl">
                <Slider {...settings}>
                    {sliderImages.map((img, index) => (
                        <div key={index} className="w-full">
                            <div className="aspect-[16/9] w-full">
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx>{`
        .custom-dots {
          position: static !important;
          display: flex !important;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .custom-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ccc;
          transition: all 0.3s ease-in-out;
        }

        .custom-dot:hover {
          background-color: #ff7f00;
          transform: scale(1.2);
        }

        .slick-active .custom-dot {
          background-color: #ff7f00;
          transform: scale(1.3);
        }

        .slick-slider *:focus {
          outline: none !important;
        }
      `}</style>
        </div>
    );
};

export default SliderComponent;