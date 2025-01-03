'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

type CheckoutProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

const CheckoutPage = () => {
  const [checkoutItems, setCheckoutItems] = useState<CheckoutProduct[]>([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'creditCard',
  });
  const router = useRouter();

  useEffect(() => {
    // Get cart data from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCheckoutItems(JSON.parse(storedCart));
    }
  }, []);

  const getTotalPrice = () => {
    return checkoutItems
      .reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  const handleConfirmOrder = () => {
    if (!customerDetails.name || !customerDetails.email || !customerDetails.address) {
      alert('Please fill in all the customer details.');
      return;
    }
    // Combine cart data with customer details
    const orderData = {
      customer: customerDetails,
      cart: checkoutItems,
      totalPrice: getTotalPrice(),
    };
    
    // Send this data to a confirmation page or process the order
    const orderDataString = encodeURIComponent(JSON.stringify(orderData));
    router.push(`/order-summary?order=${orderDataString}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      paymentMethod: e.target.value,
    }));
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="text-center py-20 bg-black text-white">
        <h1 className="text-3xl font-bold mb-4">No Items for Checkout</h1>
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
    <div className="bg-black">
      <Navbar />
      <div className="container text-center bg-black text-white mx-auto py-20 px-4 sm:px-6 lg:px-20">

        <h1 className="text-5xl text-[#ab572d] font-medium mb-6">Checkout</h1>

        {/* Product Details Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {checkoutItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full sm:w-72 bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full  object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-yellow-500 font-semibold">
                ${item.price} x {item.quantity}
              </p>
              <p className="text-gray-300">
                Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Product Description Paragraph */}
        <div className="text-lg mb-8 lg:px-32 ">
          <p>
            Our products are designed with the highest quality materials to ensure durability and style. Whether you're looking for something functional or fashionable, our collection offers a variety of options that cater to every need. From sleek designs to versatile features, each item is crafted with care to enhance your experience. With a focus on customer satisfaction, we aim to deliver products that exceed expectations, making every purchase worthwhile.
          </p>
        </div>

        {/* Customer Details Form */}
        <div className="w-full sm:w-[400px] mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4">Customer Details</h2>
          <div className="mb-4">
            <label className="block text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={customerDetails.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 mt-4 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={customerDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 mt-4 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Address</label>
            <input
              type="text"
              name="address"
              value={customerDetails.address}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-800 mt-4 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm">Payment Method</label>
            <select
              name="paymentMethod"
              value={customerDetails.paymentMethod}
              onChange={handlePaymentChange}
              className="w-full p-2 bg-gray-800 mt-4 rounded-md"
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
        </div>

        {/* Total Price and Confirm Button */}
        <div className="mt-8 text-right">
          <h3 className="text-2xl font-bold">Grand Total: ${getTotalPrice()}</h3>
          <button
            className="px-6 py-3 mt-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
