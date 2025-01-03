"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-start">
      {/* Main Content */}
      <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-16 z-20 relative">
        {/* Logo */}
        <p className="text-3xl sm:text-4xl font-bold mt-10 text-white">Mystic Essence</p>

       

        {/* Navigation (Desktop) */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 hidden  flex-wrap gap-4 px-6 py-3 z-10">
          <Link href="/" className="px-4 rounded-full text-base text-white transition">
            Home
          </Link>
          <Link href="products" className="px-4 rounded-full text-base text-white transition">
            Shop
          </Link>
          <Link href="About" className="px-4 rounded-full text-base text-white transition">
            About Us
          </Link>
          <Link href="Services" className="px-4 rounded-full text-base text-white transition">
            Services
          </Link>
          <Link href="Blogs" className="px-4 rounded-full text-base text-white transition">
            Blog
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`flex gap-4 sm:gap-6 text-white text-sm sm:text-base sm:flex-row flex-col sm:static absolute top-full md:mt-14 left-0 right-0 bg-gradient-to-r to-black via-gray-900 from-black sm:bg-transparent transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link href="/" className="px-4 py-2 text-center">Home</Link>
          <Link href="products" className="px-4 py-2 text-center">Shop</Link>
          <Link href="About" className="px-4 py-2 text-center">About Us</Link>
          <Link href="Services" className="px-4 py-2 text-center">Services</Link>
          <Link href="Blogs" className="px-4 py-2 text-center">Blog</Link>
        </nav>

        {/* Icons (Bag, Heart, and User) */}
        <div
         className="flex gap-4 mt-8 sm:gap-6">
          {/* Bag Icon */}
          <a href="/cart">
          <svg
            width={32}
            height={33}
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-8 h-6 sm:h-8"
          >
            <path
              d="M12 6V4C12 3.44772 12.4477 3 13 3H19C19.5523 3 20 3.44772 20 4V6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6H28L26 25H6L4 6Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 18C10 18.5523 10.4477 19 11 19C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17C10.4477 17 10 17.4477 10 18Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 18C20 18.5523 20.4477 19 21 19C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17C20.4477 17 20 17.4477 20 18Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </a>

          {/* Heart Icon (Favorites) */}
          <svg
            width={32}
            height={33}
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-8 h-6 sm:h-8"
          >
            <path
              d="M16 29S4 20 4 12C4 7.02944 7.02944 4 12 4C14.9696 4 16 6.93993 16 6.93993C16 6.93993 17.0304 4 20 4C24.9706 4 28 7.02944 28 12C28 20 16 29 16 29Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* User Profile Icon */}
          
           {/* Toggle Button for Mobile */}
        <button
          aria-label="Toggle Menu"
          className="sm:hidden md:flex flex items-center justify-center text-white"
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
        </div>
      </div>
    </section>
  );
};

export default Navbar;
