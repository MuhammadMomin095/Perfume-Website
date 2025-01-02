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





        <div className="py-4 md:px-10 px-6 lg:px-20 object-cover rounded-md mb-4 w-full">
  <div className="grid grid-cols-2 grid-rows-2">

    {/* Image 1 */}
    <div className="w-full h-[246px] relative">
  <div className="absolute bottom-0 w-full bg-[#d9d9d9]" />
  <img
    src="a.png"
    className="w-full h-full object-cover"
  />
</div>


    {/* Image 2 */}
    <div className="w-full h-[246px] relative">
      <div className="absolute bottom-0 w-full bg-[#d9d9d9]" />
      <img
        src="b.png"
        className="w-full h-full object-cover"
      />
    </div>
    

    {/* Image 3 */}
    <div className="w-full h-[246px] relative">
      <div className="absolute bottom-0 w-full bg-[#d9d9d9]" />
      <img
        src="c.jpeg"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Image 4 */}
    <div className="w-full h-[246px] relative">
      <div className="absolute bottom-0 w-full bg-[#d9d9d9]" />
      <img
        src="d.png"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>



       
          </div>



        </div>
        </div>














        <div className="flex flex-wrap justify-center items-center py-16 gap-4  ">
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


