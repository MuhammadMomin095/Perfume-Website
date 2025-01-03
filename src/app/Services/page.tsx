import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";




type Service = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
  };
  
  const Services: Service[] = [
    {
        id: 1,
        title: "Personal Fragrance Consultations",
        description:
          "Choosing the right fragrance can be a deeply personal experience. Our team of knowledgeable fragrance experts is here to guide you through this process. Whether you're looking for a signature scent, a gift for a loved one, or need assistance in exploring new fragrance families, our consultants will take the time to understand your preferences and suggest the perfect matches.",
        imageSrc: "/Services/2.png", 
      },
      {
        id: 2,
        title: "Custom Fragrance Creation",
        description: "Experience the art of bespoke perfumery with our custom fragrance creation service. Work closely with our skilled perfumers to craft a scent that is uniquely yours. From selecting individual notes to blending them into a harmonious symphony, we'll help you bring your fragrance vision to life. Whether it's a special occasion, a gift for someone dear, or simply a way to indulge in luxury, a custom-created perfume is an unforgettable experience.",
        imageSrc: "/Services/3.png",
      },
      {
        id: 3,
        title: "Scented Gift Selection",
        description: "Looking for a meaningful gift that leaves a lasting impression? Our scented gift selection service is designed to help you find the perfect fragrance gift for any occasion. Whether it's a birthday, anniversary, or a gesture of appreciation, our experts will assist you in choosing a fragrance that perfectly conveys your sentiments and makes the recipient feel cherished.",
        imageSrc: "/Services/4.png",
      },
      {
        id: 4,
        title: "Fragrance Events and Workshops",
        description: "Join us for fragrance-centric events and workshops that celebrate the art of perfumery.Immerse yourself in the captivating world of scents, learn from experts, and discover the nuances of different fragrance families. These events are perfect for fragrance enthusiasts and novices alike, providing a unique opportunity to expand your olfactory knowledge.",
        imageSrc: "/Services/5.png",
      },
      {
        id: 5,
        title: "Eco-friendly Initiatives",
        description: "At Local Face, we are committed to sustainability and eco-conscious practices. As part of our services, we offer guidance on selecting environmentally friendly and cruelty-free fragrances. We partner with brands that share our values and are dedicated to making a positive impact on the planet.",
        imageSrc: "/Services/6.png",
      },
      {
        id: 6,
        title: "Online Shopping Convenience",
        description: "Explore our carefully curated collection of perfumes from the comfort of your home. Our user-friendly website offers a seamless online shopping experience, complete with detailed product descriptions and customer reviews. You can also reach out to our customer support team for any assistance during your shopping journey.",
        imageSrc: "/Services/7.png",
      },
    ];
    export default function ServicesPage() {
      return (
        <div className="bg-black">
          <Navbar />
    
          <div className="py-20 h-full">
            <div className="bg-black h-[610px] text-white relative mt-20">
              <img
                src="Services/1.png"
                alt="Background"
                className="absolute w-full inset-0 h-[610px] object-cover z-0 opacity-60"
              />
    
              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-black/70"></div>
    
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6 min-h-screen">
                <p className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
                  Our Services
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-12">
                  At Local Face, we are dedicated to providing you with a delightful and immersive perfume shopping
                  experience. Our services are tailored to ensure that you find the perfect fragrance that
                  complements your unique personality and style. We take pride in offering a range of services that
                  go beyond just selling perfumes, aiming to make your journey with us truly special.
                </p>
              </div>
            </div>
    
            <div className="bg-black text-white py-12 px-4 sm:px-8">
              <div className="max-w-6xl mx-auto">
                {Services.map((service: Service, index: number) => (
                  <div
                    key={service.id}
                    className={`flex flex-col lg:flex-row items-center py-10 gap-10 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full md:w-2/3 lg:w-1/2">
                      <Image
                        src={service.imageSrc}
                        alt={service.title}
                        width={650}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-5xl font-bold py-10 text-[#ab572d] mb-4">{`0${service.id}.`}</h2>
                      <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
    
              <div className="px-8 mt-20 text-left text-white">
                <p>
                  At Local Face, our passion for perfumery drives us to go above and beyond to serve you better.
                  We invite you to experience our exceptional services and indulge in the world of luxurious
                  scents. Let us be your trusted fragrance destination, where your olfactory dreams come to life.
                </p>
                <br />
                <br />
                <p>
                  If you have any questions or need assistance, please do not hesitate to reach out to our
                  friendly team. We're here to make your fragrance exploration a truly memorable one.
                </p>
                <br />
                <br />
                <p>Your Local Face Team</p>
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      );
    }
    