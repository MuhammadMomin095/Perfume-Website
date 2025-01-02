'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useParams } from 'next/navigation';



type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  details: string;
  features: string[];
  sizeOptions: string[];
  dimensions: string;
  weight: string;
  availableColors: string[];
  rating: number;
  reviews: number;
  tags: string[];
};

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the ID from URL params
  const [product, setProduct] = useState<Product | null>(null);

  const productId = typeof id === 'string' ? parseInt(id, 10) : null;

  useEffect(() => {
    // Fetch product by ID
    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/products/${id}`); // Replace with your actual API endpoint
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-left bg-black text-white relative">
      <Navbar />
    <div className="bg-black text-white py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Product Image */}
        <div className="w-full justify-center items-center flex lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-96 justify-center rounded-md shadow-lg"
          />
        </div>

        {/* Product Information */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-yellow-500 text-sm mb-4">
            ★ {product.rating} ({product.reviews} Reviews)
          </p>
          <p className="text-gray-300 mb-6">{product.description}</p>

          {/* Size Options */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Select Size:
            </label>
            <div className="flex gap-2">
              {product.sizeOptions.map((size: string, index: number) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-700 rounded-md hover:bg-yellow-500 focus:outline-none"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-yellow-500 mb-4">
            {product.price}
          </p>

          {/* Quantity and Wishlist */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <button className="px-3 py-1 bg-gray-700 rounded-l-md hover:bg-yellow-500">
                -
              </button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center bg-gray-800 focus:outline-none"
              />
              <button className="px-3 py-1 bg-gray-700 rounded-r-md hover:bg-yellow-500">
                +
              </button>
            </div>
            <button className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">
              Wishlist ♥
            </button>
          </div>

          {/* Add to Bag Button */}
          <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600">
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-10 container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        <p className="text-gray-300 mb-6">{product.details}</p>

        {/* Features */}
        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside text-gray-400">
          {product.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
}


export default ProductDetailsPage;