"use client";

import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    
    <div className=" w-full bg-black ">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col sm:flex-row justify-between items-center  sm:px-8  gap-6 z-10 mt-12 sm:mt-0 py-32 px-2 md:px-20 lg:px-32">
        {/* Text Content */}
        <div className="flex flex-col gap-4 max-w-lg sm:max-w-2xl text-center sm:text-left">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-light text-white leading-tight sm:leading-snug">
            Elevate Your Spirit with Victory Scented Fragrances!
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300">
            Shop now and embrace the sweet smell of victory with Local Face.
          </p>
          <button className="px-6 py-3 w-32 sm:w-36 bg-[#ab572d] text-sm sm:text-base font-bold text-white rounded-md mt-4 sm:mt-6 hover:bg-[#924925] transition">
            Shop Now
          </button>
        </div>

        {/* Hero Image */}
        <img
          src="ariekoprasethio_a_bottle_of_perfume_spray_super_realistic_4k_re_f44fec90-0d8e-4dc3-96f8-3f03da660dec-(1)ffsb-1.png"
          alt="Perfume Bottle"
          className="w-2/3 sm:w-1/2 lg:w-96 max-w-xs sm:max-w-sm h-auto object-cover mt-8 sm:mt-0"
        />
      </div>
    </div>
  );
};

export default Header;
