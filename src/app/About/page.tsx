"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <div className="py-20 h-full">
        <div className="bg-black h-[610px] text-white relative mt-20">
          <img
            src="1.png"
            alt="Background"
            className="absolute w-full inset-0 h-[610px] object-cover z-0 opacity-60"
          />

          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6 min-h-screen px-4 sm:px-6 md:px-8">
            <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
              About Us
            </p>
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-12">
              At Local Face, we believe that perfumes are more than just scents;
              they are expressions of one's individuality and style. Our passion
              for exquisite fragrances led us to curate a collection that captures
              the essence of diverse personalities, bringing you an unparalleled
              olfactory experience.
            </p>
          </div>
        </div>

        <div className="bg-black text-white min-h-screen  justify-center items-center flex relative z-10 py-10">
          {/* Our Story Section */}
          <div className="text-center space-y-6 px-4 sm:px-8 lg:px-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#ab572d]">
              Our Story
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Local Face Perfumes was founded by a group of perfume enthusiasts
              with a shared vision to create a haven for perfume lovers seeking
              authentic, locally-inspired fragrances. Inspired by the diversity
              and richness of cultures around the world, we set out on a journey
              to curate a collection of scents that capture the essence of each
              region. Our aim is to bring you closer to the heart and soul of
              different cultures through the art of perfumery.
            </p>
          </div>
        </div>

        <div className="min-h-screen relative z-10 py-16">
          <img
            src="2.png"
            alt="Background"
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="bg-black z-10 text-white min-h-screen relative py-16 px-4 sm:px-8 lg:px-20">
          {/* What Makes Us Unique Section */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#ab572d] mb-8">
              What Makes Us Unique
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Unique Feature 1 */}
              <div className="p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#ab572d] mb-4">
                  Locally Inspired
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Our perfumes are meticulously crafted to reflect the cultural
                  heritage, traditions, and landscapes of various regions. From
                  the serene cherry blossom gardens of Kyoto, each fragrance
                  tells a unique story that resonates with its origin.
                </p>
              </div>

              {/* Unique Feature 2 */}
              <div className="p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#ab572d] mb-4">
                  High-Quality Ingredients
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  We believe that the key to an extraordinary scent lies in the
                  quality of ingredients. That’s why we collaborate with expert
                  perfumers to source the finest all-natural materials from
                  around the world.
                </p>
              </div>

              {/* Unique Feature 3 */}
              <div className="p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#ab572d] mb-4">
                  Personalized Service
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  We understand that choosing the perfect scent is a deeply
                  personal experience. Our team of fragrance consultants is
                  always ready to assist you in finding a fragrance that
                  complements your personality and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
