import React from "react";
import ecommerce from "../../assets/ecommerce.jpg";
import manufacturing from "../../assets/manufacturing.png";
import retail from "../../assets/retail.jpg";
import lifescience from "../../assets/lifescience.jpg";
import insurance from "../../assets/insurance.jpg";
import banking from "../../assets/banking.png";
import logistics from "../../assets/logistics.jpg";
import warehousing from "../../assets/warehousing.jpg";
import qlikview from "../../assets/qlikview.png";
import tableau from "../../assets/tableau.jpg";
import hive from "../../assets/hive.jpg";
import cloudera from "../../assets/cloudera.png";
import informatica from "../../assets/informatica.png";
import sap from "../../assets/sap.png";

const originalIndustries = [
  { src: ecommerce, alt: "eCommerce" },
  { src: manufacturing, alt: "Manufacturing" },
  { src: retail, alt: "Retail" },
  { src: lifescience, alt: "Life Science" },
  { src: insurance, alt: "Insurance" },
  { src: banking, alt: "Banking" },
  { src: logistics, alt: "Logistics" },
  { src: warehousing, alt: "Warehousing" },
];

const newImages = [
  { src: qlikview, alt: "QlikView" },
  { src: tableau, alt: "Tableau" },
  { src: hive, alt: "Hive" },
  { src: cloudera, alt: "Cloudera" },
  { src: informatica, alt: "Informatica" },
  { src: sap, alt: "SAP" },
];

function Arena() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-black mb-8">
          Technology Consulting Arena
        </h3>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {newImages.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 w-40 sm:w-44 md:w-48"
            >
              <div className="flex items-center justify-center h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">{logo.alt}</p>
            </div>
          ))}
        </div>

        <hr className="my-16 border-gray-300" />

        <h3 className="text-3xl font-bold text-black mb-10">
          Functional Consulting Arena
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {originalIndustries.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 w-40 sm:w-44 md:w-48"
            >
              <div className="flex items-center justify-center h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">{logo.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Arena;
