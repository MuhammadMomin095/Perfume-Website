"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DiVim } from "react-icons/di";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

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
  <Link href="products" className="px-4 rounded-full text-xl text-white font-semibold transition">
    Shop
  </Link>
  <Link href="About" className="px-4 rounded-full text-xl text-white font-semibold transition">
    About Us
  </Link>
  <Link href="Services" className="px-4 rounded-full text-xl text-white font-semibold transition">
    Services
  </Link>
  <Link href="Blogs" className="px-4 rounded-full text-xl text-white font-semibold transition">
    Blog
  </Link>
</div>


          {/* Mobile Navigation */}
          <nav
            className={`flex gap-4 sm:gap-6 text-white text-sm sm:text-base sm:flex-row flex-col sm:static absolute top-full left-0 right-0 bg-[#1C1C1C] sm:bg-transparent transition-all duration-300 ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Link href="/" className="px-4 py-2 text-center">Home</Link>
            <Link href="products" className="px-4 py-2 text-center">Shop</Link>
            <Link href="About" className="px-4 py-2 text-center">About Us</Link>
            <Link href="Services" className="px-4 py-2 text-center">Services</Link>
            <Link href="Blogs" className="px-4 py-2 text-center">Blog</Link>
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
        </section>

    );
};

export default Navbar;