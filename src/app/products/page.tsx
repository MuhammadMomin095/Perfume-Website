'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number; // Added rating field
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all products data from the API
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the products state
      })
      .catch((err) => {
        console.error('An error occurred while fetching products:', err);
      });
  }, []);

  return (
    <div className="text-left bg-black text-white relative">
      {/* Add Font Awesome CDN for the star icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      {/* Navbar */}
      <Navbar />

      <section className="relative z-10 text-gray-300 text-center py-24">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase mb-4 justify-center flex items-center bg-transparent text-[#ab572d]">
          Best Selling Product
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-20 mt-20">
          {products.map((product) => (
            <motion.div
            
            
              key={product.id}
              className="motion-item hover:scale-105 shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out w-full bg-[#232323]" style={{ boxShadow:"4px 4px 10px #858585"}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/products/${product.id}`}>
              <img
                src={product.image} // Display product image
                alt={product.name}
                className="w-full h-full object-cover rounded-lg mb-4"
              />
              </Link>

              <h2 className="text-xl font-semibold text-gray-100 mb-4">{product.name}</h2>

              {/* Display Rating Stars */}
              <p className="text-sm text-[#ab572d] space-x-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`${
                      index < Math.floor(product.rating)
                        ? "fas fa-star text-yellow-400"
                        : index === Math.floor(product.rating) && product.rating % 1 !== 0
                        ? "fas fa-star-half-alt "
                        : "far fa-star"
                    }`}
                  ></i>
                ))}
              </p>

              <div className="flex space-x-4">
                <p className="text-lg font-semibold text-[#ab572d] mb-4">{product.price}</p>
                
                <p className="text-lg font-semibold text-white mb-4">100ml</p>
                
              </div>

               
              
              
            </motion.div>
          ))}
        </div>







        <div className="bg-black text-white py-28 ">
      <h1 className="text-5xl font-semibold text-center mb-12">Special Offers</h1>

      
        {/* Aqua Serenity Offer */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r to-black via-[#063445] from-[#012A3D]">
          <img
            src="shop/13.png"
            alt="Aqua Serenity Perfume"
            className="w-full py-4 object-cover rounded-md mb-4"
          />
          <div className='text-star px-8 to-black via-[#063445] from-black'>
          <div className=' py-8'>
          <h2 className="text-4xl  text-start  mb-2">Limited Time Offer: 20% OFF on Aqua Serenity Perfume!</h2>
          </div>
            <p className="text-white text-5xl text-start font-medium mb-2">Aqua Serenity </p>
            <p className="text-[#13d0e3] text-4xl text-start font-medium mb-2">Embrace the Tranquil Tides </p>
            <p className="text-gray-400 text-start py-20 mb-4">
            Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes
      the essence of water
          </p>

          <div className="flex justify-center items-center  relative overflow-hidden w-36 h-12 rounded-lg border border-white">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Know More</p>
  </div>
        
        </div>


        </div>






        {/* Golden Angel Offer */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20  bg-gradient-to-r to-black via-[#562E1A] from-[#5B260F]">

        <div className='text-star px-8 bg-gradient-to-r to-black via-[#562E1A] from-black'>
          <div className=' py-8'>
          <h2 className="text-4xl  text-start  mb-2">Limited Time Offer: 25% OFF on Golden Angel Perfume!</h2>
          </div>
            <p className="text-white text-5xl text-start font-medium mb-2">Golden Angel</p>
            <p className="text-[#EFA94B] text-4xl text-start font-medium mb-2">Unleash Your Divine Glow </p>
            <p className="text-gray-400 text-start py-20 mb-4">
            Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.
          </p>

          <div className="flex justify-center items-center  relative overflow-hidden w-36 h-12 rounded-lg border border-white">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Know More</p>
  </div>
  </div>

  <img
            src="shop/14.png"
            alt="Golden Angel Perfume"
            className="w-full py-4 object-cover rounded-md mb-4"
          />
        
       
  
       
      </div>


    </div>


      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
