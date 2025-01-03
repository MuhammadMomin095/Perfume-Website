'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from "next/link";

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
  const params = useParams(); // App Router-specific hook
  const router = useRouter(); // App Router-specific hook
  const [product, setProduct] = useState<Product | null>(null);
  const [productItems, setProductItems] = useState<any[]>([]); // State for cart items

  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        try {
          const response = await fetch(`/api/products/${params.id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    };

    fetchProduct();
  }, [params.id]);

  // Handle quantity change
  const handleQuantityChange = (id: number, type: string) => {
    const updatedItems = productItems.map((item) => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    // Update localStorage and state
    setProductItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // Add product to the cart
  const handleAddToBag = () => {
    if (product) {
      const storedCart = localStorage.getItem('cart');
      const cart = storedCart ? JSON.parse(storedCart) : [];

      const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      setProductItems(cart); // Update cart state
      router.push('/cart'); // Redirect to cart page
    }
  };

  if (!product) {
    return (
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 w-[300px] sm:w-[450px] h-[87px] justify-center flex items-center bg-transparent border-4 text-black border-black" style={{ boxShadow: "10px 10px 20px #C1AA90" }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="text-left bg-black text-white relative">
      <Navbar />
      <div className="bg-black text-white py-10 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full justify-center items-center flex lg:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-96 justify-center rounded-md shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-yellow-500 text-sm mb-4">
              ★ {product.rating} ({product.reviews} Reviews)
            </p>
            <p className="text-gray-300 mb-6">{product.description}</p>

            <p className="text-2xl font-semibold text-yellow-500 mb-4">
              {product.price}
            </p>

            {/* Quantity and Wishlist */}
            <div className="flex items-center gap-4 mb-4">
              

              <button className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">
                Wishlist ♥
              </button>
            </div>

            <button
              onClick={handleAddToBag}
              className="w-64 py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600"
            >
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

      <div className="text-center items-center flex justify-center md:text-left py-8">
        <Link
          href="/products"
          className="px-6 py-3 text-white bg-black rounded-full shadow-md transform transition-all hover:scale-105"
          style={{ boxShadow: "4px 4px 10px white" }}
        >
          Back to Products
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
