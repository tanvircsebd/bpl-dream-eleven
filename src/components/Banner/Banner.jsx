import React from "react";
import bannerMain from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";

const Banner = ({ handleAddCredit }) => {
  return (
    <div className="w-full">
      <section className="relative flex items-center justify-center h-[60vh] text-white bg-[#131313] bg-cover bg-center">
        <div
          // className="text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 rounded-lg"
          className="text-center  p-8 rounded-lg"
          style={{ backgroundImage: `url(${bgShadow})` }}
        >
          <img
            src={bannerMain}
            alt="Cricket Banner"
            className="mx-auto mb-6 w-24 lg:w-32"
          />
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-300">
            Beyond Boundaries, Beyond Limits
          </p>
          <button
            onClick={handleAddCredit}
            className="mt-6 btn btn-warning text-black font-bold"
          >
            Claim Free Credit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
