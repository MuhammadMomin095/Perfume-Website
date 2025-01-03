import React from "react";

const About: React.FC = () => {
  return (

    <div className=" w-full bg-black  justify-center items-center flex relative py-12  px-2 md:px-20 lg:px-32">
    
    <div className="w-full h-auto justify-center items-center flex  relative ">
      <div className="flex flex-col lg:flex-row justify-start items-center gap-[81px] lg:h-[575px]  ">
        <div className="flex justify-start items-start">
        <img
          src="megaerica_carbonated_perfume_in_a_bottle_6a49a0c4-198a-4f33-a2d6-a0c8eee0c9d8ddef-1.png"
          alt="Perfume Bottle"
          className="w-full lg:w-[670px] items-start h-auto lg:h-[573px] object-cover"
        />
        </div>
        <div className="flex justify-start items-center">
        <div className="flex flex-col justify-start items-center w-full lg:w-[587px] gap-8 px-4 lg:px-0">
          <p className="text-3xl lg:text-[50px] font-medium text-left text-white">
            Our Values
          </p>
          <p className="text-base lg:text-xl text-left text-white leading-relaxed">
            At Local Face, our perfume retail store is built on a foundation of
            passion and authenticity. We believe in celebrating the individuality
            of every customer, providing a diverse collection of scents that
            resonate with their unique personality and style. Our dedicated team of
            fragrance enthusiasts is committed to creating a welcoming and inclusive
            environment, where connections are forged, and inspiration thrives.
          </p>
          <br />
          <p className="text-base lg:text-xl text-left text-white leading-relaxed">
            Embracing sustainability and continuous learning, Local Face strives to
            be more than just a shopping destination; we are a community that
            inspires and empowers individuals on their fragrance journey.
          </p>
        </div>
      </div>
      </div>
    </div>
    </div>

    
  );
};

export default About;
