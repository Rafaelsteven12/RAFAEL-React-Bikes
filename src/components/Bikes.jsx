import React from "react";

import mountain from "../assets/G23_FuryPro_3Q_e569aa3b-2259-48fd-b40f-220f79da8819.webp";
import road from "../assets/2025_Pride_Pearl-White.png";
import electric from "../assets/5_1d11600f-e765-455c-b4d4-0e88dca776df.webp";

const Bikes = () => {
  return (
    <section className="bg-[#f3f4f6] py-20" id="bikes">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h1 className="text-2xl font-bold mb-10">Our Bikes</h1>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden text-left">
            <img
              src={mountain}
              alt="Mountain Bike"
              className="w-full h-60 object-cover"
            />
            <p className="p-4 font-semibold">Mountain Bike</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden text-left">
            <img
              src={road}
              alt="Road Bike"
              className="w-full h-60 object-cover"
            />
            <p className="p-4 font-semibold">Road Bike</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden text-left">
            <img
              src={electric}
              alt="Electric Bike"
              className="w-full h-60 object-cover"
            />
            <p className="p-4 font-semibold">Electric Bike</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bikes;
