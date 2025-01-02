import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen relative py-32 px-4 sm:px-8 md:px-20 lg:px-32">
      {/* Background Image */}
      <img
        src="dartistana_create_a_professional_product_shoot_of_3_perfume_bot_643cefaf-f6d6-4210-af50-7db38bc60ffc-(1)-3.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ab572d] leading-snug">
          Welcome to Local Face
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl sm:max-w-3xl leading-relaxed">
          Welcome to Local Face Perfumes, where the spirit of victory and
          triumph come alive through scents that empower and inspire. Our
          curated collection, aptly named "Victory Scented," is a celebration
          of success and elegance, designed to unleash your victorious
          essence. Indulge in the sweet taste of triumph with captivating
          fragrances that tell the tale of your achievements. At Local Face, we
          believe that every victory deserves a signature scent, and we are
          dedicated to providing unforgettable fragrances that elevate your
          spirit and empower your journey.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
