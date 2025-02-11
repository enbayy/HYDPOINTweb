import React from "react";
import excavator from "../../assets/malzeme.png";
import bulldozer from "../../assets/malzeme.png";
import crane from "../../assets/malzeme.png";

const machineList = [
  {
    name: "Excavator Model X",
    price: 15000,
    image: excavator,
    aosDelay: "0",
    type: "Excavator",
    condition: "New",
    location: "Istanbul, Turkey",
  },
  {
    name: "Bulldozer Model Y",
    price: 18000,
    image: bulldozer,
    aosDelay: "500",
    type: "Bulldozer",
    condition: "Used",
    location: "Ankara, Turkey",
  },
  {
    name: "Crane Model Z",
    price: 20000,
    image: crane,
    aosDelay: "1000",
    type: "Crane",
    condition: "New",
    location: "Izmir, Turkey",
  },
];

const MachineList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
         ÜRÜNLER
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          İhtiyacınız olan makineleri hemen satın alabilir veya satabilirsiniz. Farklı tip ve modellerde makinelerle işlerinizi kolaylaştırın.
        </p>
        {/* Machine listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {machineList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <p>{data.type} - {data.condition}</p>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-sm absolute bottom-0 left-3">
                  {data.location}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of machine listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
           HEPSİNİ GÖR
          </button>
        </div>
      </div>
    </div>
  );
};

export default MachineList;
