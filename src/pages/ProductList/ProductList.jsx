import React from "react";
import { machineList } from "../About/ProductData";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const limitedMachineList = machineList.slice(0, 6);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/urunler");
  }

  return (
    <section id="urunler">
      <div className="pb-24">
        <div className="container">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
          >
            ÜRÜNLER
          </h1>
          <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
            İhtiyacınız olan makineleri hemen satın alabilirsiniz. Farklı tip ve modellerde makinelerle işlerinizi kolaylaştırın.
          </p>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
              {limitedMachineList.map((data) => (
                <ProductCard key={data.id} data={data} />
              ))}
            </div>
          </div>
          <div className="grid place-items-center mt-8">
            <button
              data-aos="fade-up"
              className="button-outline"
              onClick={handleClick}
            >
              HEPSİNİ GÖR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;