import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";

export default async function Production() {
  const data = await client.fetch(`*[_type == "perfume"]`);
  console.log(data);

  return (
    <div className="w-full bg-gradient-to-r from-black via-black to-[#121212] py-20">
      <section className="flex flex-col justify-center items-center h-auto w-full relative gap-6 bg-gradient-to-r from-black via-black to-[#121212] ">
        {/* Title Section */}
        <div className="text-center">
          <p className="text-[30px] md:text-[40px] lg:text-[50px] font-medium text-[#ab572d]">
            Best selling products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-10 lg:px-20">
          {data.map((perfume: any, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 p-4 border border-black bg-gradient-to-r to-black via-[#1a1a1a] from-black rounded-lg"style={{ boxShadow: "-2px -2px 10px #ab572d, 4px 4px 16px #EFA94B" }}
            >
              {/* Product Image */}
              {perfume.image?.asset && (
                <div className="w-full aspect-square overflow-hidden rounded-3xl">
                  <img
                    src={urlFor(perfume.image).url()}
                    alt={perfume.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Product Name */}
              <p className="text-lg md:text-xl font-medium text-center text-white">
                {perfume.name}
              </p>

              {/* Product Price */}
              <p className="text-sm md:text-base text-center">
                <span className="font-bold text-[#ab572d]">{perfume.price}</span>
                <span className="font-light text-white"> 100ml</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
