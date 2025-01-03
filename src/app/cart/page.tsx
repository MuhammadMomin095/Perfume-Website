'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  useEffect(() => {
    // Get cart data from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemove = (id: number) => {
    // Remove the product from the cart
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id: number, type: string) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => {
      // Ensure price is a valid number
      const price = parseFloat(item.price.toString());  // Convert price to number if needed
      const itemTotal = isNaN(price) ? 0 : price * item.quantity; // Multiply price and quantity, handle invalid price
      return acc + itemTotal; // Add the result to the accumulator
    }, 0);
    return total.toFixed(2); // Ensure two decimal places
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center bg-black text-white py-20">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link
          href="/products"
          className="px-6 py-3 text-white bg-black rounded-full shadow-md transform transition-all hover:scale-105"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className='bg-black'>
      <Navbar />
      <div className="container relative text-center bg-black text-white mx-auto py-20 px-4">
        <h1 className="text-5xl text-[#ab572d] font-medium mb-6">Your Cart</h1>
        <div className="flex relative text-center justify-center mt-8 flex-wrap gap-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex flex-col items-center w-80 bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover rounded-lg"
              />
              <h2 className="text-lg font-bold mt-4">{item.name}</h2>
              {/* Ensure price is a number and format properly */}
              <p className="text-yellow-500 font-semibold">{(item.price)}</p>

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => handleQuantityChange(item.id, 'decrease')}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                >
                  -
                </button>
                <span className="text-gray-300">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 'increase')}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md mt-4 hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <h2 className="text-lg font-bold mt-4">Total Price</h2>
          {/* Ensure total price is calculated and formatted properly */}
          <p className="text-yellow-500 font-semibold">${getTotalPrice()}</p>

          <Link
            href="/checkout"
            className="px-6 py-3 mt-4 inline-block bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600"
          >
            Proceed to Checkout
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
