import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";


export default async function Blogs() {
    const data = await client.fetch(`*[_type == "blog"]`);
    console.log(data);
  return (
    <div className="bg-black">
    <Navbar />






    <div className="bg-black text-white py-28 ">
      <h1 className="text-5xl font-semibold text-center mb-12">Our Blog Collection</h1>

      
        {/* Aqua Serenity Offer */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 bg-black">
          <div className='text-star px-8 to-black via-[#063445] from-black'>
          <div className=' py-8'>
          <h2 className="text-4xl  text-start  mb-2">Discover the Art of Perfumery</h2>
          </div>
            <p className="text-gray-400 text-start mb-4">
            Welcome to Local Face's Perfumery Blog Collection! Here, we invite you to immerse yourself
        in the captivating world of fragrances, where each blog post is a sensory journey that
        unveils the magic and allure of perfumes. Our team of fragrance enthusiasts, industry
        experts, and perfumers have curated an array of captivating articles to enrich your
        understanding and appreciation for these olfactory delights.
          </p>
          <p className="text-gray-400 text-start  mb-4">At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and
        emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of
        blog posts, each designed to ignite your senses and deepen your appreciation for these
        olfactory wonders.</p>
        </div>
        <div>





        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">




  <div className="flex justify-start items-start flex-grow-0 w-full flex-shrink-0 relative">
    <div className="flex-grow-0 flex-shrink-0 w-[310px] h-[246px]">
      <div className="w-[310px] h-[246px] absolute left-[-0.5px] top-[-0.5px] bg-[#d9d9d9]" />
      <img
        src="a.png"
        className="w-[310px] h-[310px] absolute left-[-0.5px] top-[-32.5px] object-cover"
      />
    </div>





    <div className="flex-grow-0 flex-shrink-0 w-[355px] h-[246px]">
      <div className="w-[355px] h-[246px] absolute left-[309.5px] top-[-0.5px] bg-[#d9d9d9]" />
      <img
        src="b.png"
        className="w-[355px] h-[355px] absolute left-[309.5px] top-[-28.5px] object-cover"
      />
    </div>
  </div>



  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
    <div className="flex-grow-0 flex-shrink-0 w-[455px] h-[246px]">
      <div className="w-[455px] h-[246px] absolute left-[-0.5px] top-[-0.5px] bg-[#d9d9d9]" />
      <img
        src="c.jpeg"
        className="w-[455px] h-[246px] absolute left-[-0.5px] top-[-0.5px] object-cover"
      />
    </div>





    <div className="flex-grow-0 flex-shrink-0 w-[210px] h-[246px]">
      <div className="w-[210px] h-[246px] absolute left-[454.5px] top-[-0.5px] bg-[#d9d9d9]" />
      <img
        src="d.png"
        className="w-[218.32px] h-[278.79px] absolute left-[454.5px] top-[-0.5px] object-cover"
      />
    </div>
  </div>
</div>


       
          </div>



        </div>
        </div>














        <div className="flex flex-wrap justify-center items-center  gap-4  ">
          {data.map((blog: any, index: number) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center gap-2 w-[350px]  "
              >
                {blog.image?.asset && (
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={urlFor(blog.image).url()}
                      alt={blog.name}
                      className="w-full h-full object-cover "
                    />
                  </div>
                )}
               <p className="text-xl mt-14  font-bold text-start text-white">
                  {blog.heading}
                </p>
                <p className="text-xl  font-medium text-atart text-white">
                  {blog.para}
                </p>
                <div className="items-start flex mt-4 ">
                <p className="text-base text-center w-32 h-12 rounded-xl items-center justify-center flex border border-white ">
                  <span className="text-base font-bold text-white">
                    {blog.read}
                  </span>
                </p>
                </div>


              </div>
            ))}
          
          </div>






















     <Footer />
    </div>


  );
};


