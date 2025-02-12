import React from "react";
import { machineList } from "../../data/ProductData";
import ProductCard from "./ProductCard";

const ProductList = () => {
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
              {machineList.map((data) => (
                <ProductCard key={data.id} data={data} />
              ))}
            </div>
          </div>
          <div className="grid place-items-center mt-8">
            <button data-aos="fade-up" className="button-outline">
              HEPSİNİ GÖR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;