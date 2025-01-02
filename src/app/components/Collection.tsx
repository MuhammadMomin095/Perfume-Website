import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";

export default async function Collection() {
  const data = await client.fetch(`*[_type == "article"]`);
  console.log(data);
    return (

        <div className="w-full h-auto bg-gradient-to-r from-black via-black to-[#121212] py-10 relative">
        <div className="flex flex-col justify-center items-center gap-[55px] py-10 px-2 bg-gradient-to-r from-black via-black to-[#121212]">
     <div className="flex justify-center items-center gap-2 w-full mb-8">
  <p className="text-[30px] lg:text-[50px] font-medium text-center text-[#ab572d]">
    Our Collections
  </p>
</div>

<div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[46px] px-20">



  
  <div className="flex flex-col lg:flex-row justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[46px] w-full">
    <div className="flex-grow-0 flex-shrink-0 w-full lg:w-[300px] h-[460px] relative">
      <img
        src="darkstar_victorian_meets_brutalism__gorgeous_perfume_bottle_lav_b49a73d7-8623-4255-a2e7-6e502992c494-1.png"
        className="w-full h-full object-cover"
      />
      <p className="w-full absolute left-[23px] bottom-[-0px] text-2xl font-medium text-left text-white">
        Designer Delights Collection
      </p>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-full lg:w-[730px] h-[460px] relative">
      <img
        src="wcwsc-1.png"
        className="w-full h-full object-none"
      />
      <p className="w-full absolute left-[23px] bottom-[-0px] text-2xl font-medium text-left text-white">
        Travel Essentials Collection
      </p>
    </div>
  </div>
























  <div className="flex flex-col lg:flex-row justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[46px] w-full">
    <div className="flex-grow-0 flex-shrink-0 w-full lg:w-[400.87px] h-[480px] relative">
      <img
        src="kuroswan972_give_me_a_caldera_photo_of_a_luxurious_perfume_in_h_04778b6a-cfc4-43ba-9bc8-dee37245a2d1-1.png"
        className="w-full h-full object-none"
      />
      <p className="w-full absolute left-[23px] bottom-[-0px] text-2xl font-medium text-left text-white">
        Special Occasions Collection
      </p>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-full lg:w-[632.2px] h-[480px] relative">
      <img
        src="nele_he_perfume_you_or_some_one_like_you_of_etat_libre_dorange__daa24d6d-5e28-424b-93f9-0fbcc7e774fd-1.png"
        className="w-full h-full object-none"
      />
      <p className="w-full absolute left-[23px] bottom-[-0px] text-2xl font-medium text-left text-white">
        Seasonal Sensations Collection
      </p>
    </div>
  </div>




  <div className="flex flex-col lg:flex-row justify-start items-start flex-grow-0 flex-shrink-0 relative gap-11 w-full">
  <div className="flex-grow-0 flex-shrink-0 w-full lg:w-64 h-[480px] relative">
    <img
      src="old-fashion-black-&-gold-color-perfume-bottles-set-1.jpeg"
      className="w-full h-full object-cover"
    />
    <p className="w-full absolute left-5 bottom-[-0px] text-2xl font-medium text-left text-white">
      Vintage Treasures Collection
    </p>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-full lg:w-[400px] h-[480px] relative">
    <img
      src="kuroswan972_i_want_to_create_a_cube_stunning_photo_of_the_mysti_14ae08f2-16bb-4e85-b781-bf371c99faf1-2.png"
      className="w-full h-full object-none"
    />
    <p className="w-full absolute left-[5px] bottom-[-0px] text-2xl font-medium text-left text-white">
      Limited Edition Treasures
    </p>
  </div>

  <div className="flex-grow-0 flex-shrink-0 w-full md:w-full lg:w-[330px] h-[480px] relative">
    <img
      src="nouillepascuite_perfum_modern_shoot_for_vogue_rectangular_shot__036e3104-df47-445e-956e-04f1978997e2-1.png"
      className="w-full h-full object-none"
    />
    <p className="absolute w-full left-[5px] bottom-[-0px] text-2xl font-medium text-left text-white">
      Modern Classics Collection
    </p>
  </div>
</div>




  </div>
</div>
   










<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[81px] px-4 lg:px-20 relative bg-gradient-to-r from-black via-black to-[#121212]">
  {/* Image Section */}
  <img
    src="pexels-guillaume-pierre-leroy-11417443-2.png"
    alt="Perfume Sale"
    className="w-full lg:w-auto h-[250px] lg:h-[538px] object-cover rounded-md"
  />

  {/* Content Section */}
  <div className="absolute left-0 lg:left-[133px] bottom-6 lg:bottom-10 px-6 lg:px-0 text-white w-full lg:w-[604px] flex flex-col gap-6">
    <div className="space-y-4">
      <p className="text-[30px] lg:text-[50px] font-medium">
        Perfume Year-End Sale! Up to 50% OFF
      </p>
      <p className="text-lg lg:text-xl font-light">
        Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!
      </p>
    </div>
    
    <button className="flex justify-center items-center w-56 py-3.5 rounded-[10px] bg-[#ab572d] hover:bg-[#933d20] transition-all absolute lg:relative lg:bottom-auto bottom-6 lg:left-auto left-1/2 transform lg:transform-none -translate-x-1/2 lg:w-auto">
  <span className="text-base font-black">Know More</span>
</button>

  </div>
</div>














<div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[81px] relative  py-20 bg-gradient-to-r from-black via-black to-[#121212]">
  <div className="flex flex-col w-full px-6 lg:px-20 justify-center bg-gradient-to-r from-black via-black to-[#121212] ">
    {/* Heading */}
    <div className="flex justify-center items-center gap-2 w-full mb-8">
      <p className="text-[30px] lg:text-[50px] font-medium text-left text-[#ab572d]">
        Latest Articles
      </p>
    </div>



    <div className="flex flex-wrap justify-center items-center  gap-4  ">
          {data.map((article: any, index: number) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center gap-2 w-[350px]  "
              >
                {article.image?.asset && (
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={urlFor(article.image).url()}
                      alt={article.name}
                      className="w-full h-full object-cover "
                    />
                  </div>
                )}
               <p className="text-xl mt-14  font-bold text-start text-white">
                  {article.heading}
                </p>
                <p className="text-xl  font-medium text-atart text-white">
                  {article.para}
                </p>
                <div className="items-start flex mt-4 ">
                <p className="text-base text-center w-32 h-12 rounded-xl items-center justify-center flex border border-white ">
                  <span className="text-base font-bold text-white">
                    {article.read}
                  </span>
                </p>
                </div>


              </div>
            ))}
          
          </div>




          
          <div/>
          </div>
          </div>
    
    
    
    
    
    
          </div>


        




 








);

}