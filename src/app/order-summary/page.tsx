'use client'; // Ensure the page is client-side rendered

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const OrderSummaryPage = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if order data exists in the query params (cart details)
    const cartData = searchParams.get('cart');
    if (cartData) {
      setOrderSuccess(true); // If cart data exists, assume the order has been successfully placed
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto py-10 px-4">
      {orderSuccess ? (
        <div className="text-center bg-red-500 text-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Oops! </h1>
          <p className="text-lg">Something went wrong with your order. Please try again.</p>
        </div>
      ) : (
        <div className="text-center bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
          <p className="text-lg">Your product order has been placed successfully. You will receive your order soon!</p>
        </div>
      )}
    </div>
  );
};

// Wrapping OrderSummaryPage with Suspense to fix the CSR bailout issue
const OrderSummaryWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSummaryPage />
    </Suspense>
  );
};

export default OrderSummaryWrapper;
