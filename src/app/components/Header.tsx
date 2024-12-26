"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-black">
      <section className="relative flex flex-col items-start">
        {/* Main Content */}
        <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-16 z-20 relative">
          {/* Logo */}
          <p className="text-3xl sm:text-4xl font-bold mt-10 text-white">Local Face</p>

          {/* Toggle Button for Mobile */}
          <button
            aria-label="Toggle Menu"
            className="sm:hidden flex items-center justify-center text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6H27" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 14H27" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 22H27" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Navigation (Desktop) */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-wrap gap-4 px-6 py-3 z-10">
  <Link href="/" className="px-4 rounded-full text-xl text-white font-semibold transition">
    Home
  </Link>
  <Link href="about" className="px-4 rounded-full text-xl text-white font-semibold transition">
    Shop
  </Link>
  <Link href="skills" className="px-4 rounded-full text-xl text-white font-semibold transition">
    About Us
  </Link>
  <Link href="projects" className="px-4 rounded-full text-xl text-white font-semibold transition">
    Portfolio
  </Link>
  <Link href="contact" className="px-4 rounded-full text-xl text-white font-semibold transition">
    Contact Me
  </Link>
</div>


          {/* Mobile Navigation */}
          <nav
            className={`flex gap-4 sm:gap-6 text-white text-sm sm:text-base font-medium sm:flex-row flex-col sm:static absolute top-full left-0 right-0 bg-[#1C1C1C] sm:bg-transparent transition-all duration-300 ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Link href="/" className="px-4 py-2 text-center">Home</Link>
            <Link href="about" className="px-4 py-2 text-center">Shop</Link>
            <Link href="skills" className="px-4 py-2 text-center">About Us</Link>
            <Link href="projects" className="px-4 py-2 text-center">Portfolio</Link>
            <Link href="contact" className="px-4 py-2 text-center">Contact Me</Link>
          </nav>

          {/* Icons (Social Media, etc.) */}
          <div className="flex gap-4 mt-8 sm:gap-6">
            {/* Example icon */}
            <svg
              width={32}
              height={33}
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 sm:w-8 h-6 sm:h-8"
            >
              <path
                d="M14.5 25.5C20.299 25.5 25 20.799 25 15C25 9.20101 20.299 4.5 14.5 4.5C8.70101 4.5 4 9.20101 4 15C4 20.799 8.70101 25.5 14.5 25.5Z"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9242 22.425L27.9993 28.5001"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 gap-8 z-10 mt-16 sm:mt-0">
          <div className="flex flex-col gap-6 max-w-lg sm:max-w-3xl text-center sm:text-left">
            <p className="text-4xl sm:text-6xl font-light text-white">
              Elevate Your Spirit with Victory Scented Fragrances!
            </p>
            <p className="text-lg sm:text-2xl font-light text-white">
              Shop now and embrace the sweet smell of victory with Local Face.
            </p>
            <button className="px-6 py-3 w-40 bg-[#ab572d] text-base font-black text-white rounded-[10px] mt-4 sm:mt-6">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <img
            src="ariekoprasethio_a_bottle_of_perfume_spray_super_realistic_4k_re_f44fec90-0d8e-4dc3-96f8-3f03da660dec-(1)ffsb-1.png"
            alt="Perfume Bottle"
            className="w-full sm:w-[430px] h-auto sm:h-[769px] object-cover mt-8 sm:mt-0"
          />
        </div>
      </section>

      {/* Background Section */}
      <section className="relative w-full h-auto gap-2.5">
        <div className="w-full h-[564px] flex-grow-0 flex-shrink-0 relative">
          <img
            src="dartistana_create_a_professional_product_shoot_of_3_perfume_bot_643cefaf-f6d6-4210-af50-7db38bc60ffc-(1)-3.png"
            alt="Victory Scented Perfumes"
            className="w-full h-full absolute top-0 left-0 object-cover"
          />
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1440 564"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute top-0 left-0"
            preserveAspectRatio="none"
          >
            <mask
              id="mask0_61_301"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={1440}
              height={564}
            >
              <rect width={1440} height={564} fill="black" fillOpacity="0.30" />
            </mask>
            <g mask="url(#mask0_61_301)">
              <rect width={1440} height={564} fill="#3C3C3C" />
              <ellipse cx="49.8526" cy="39.9157" rx="410.603" ry="322.375" fill="#171717" />
              <ellipse cx="287.353" cy="463.784" rx="374.871" ry="229.717" fill="#2E2E2E" />
              <ellipse cx="1397.58" cy="431.806" rx="298.84" ry="309.882" fill="#6A6A6A" />
              <ellipse cx="1197.4" cy="41.5543" rx="420.101" ry="267.816" fill="black" />
              <ellipse cx={720} cy={282} rx="348.164" ry="231.863" fill="#535353" />
            </g>
          </svg>
          <div className="absolute inset-0 bg-black/[0.71]" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
            <p className="text-[40px] sm:text-[50px] md:text-[60px] font-medium text-[#ab572d]">
              Welcome to Local Face
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white mt-4 max-w-[960px] mx-auto">
              Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through
              scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is
              a celebration of success and elegance, designed to unleash your victorious essence. Indulge
              in the sweet taste of triumph with captivating fragrances that tell the tale of your
              achievements. At Local Face, we believe that every victory deserves a signature scent, and
              we are dedicated to providing unforgettable fragrances that elevate your spirit and empower
              your journey.
            </p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
