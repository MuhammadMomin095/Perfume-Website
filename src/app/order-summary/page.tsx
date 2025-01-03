// OrderSummaryPage.tsx
import { useEffect, useState } from 'react';

const OrderSummaryPage = ({ cartData }: { cartData: string | null }) => {
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    if (cartData) {
      setOrderSuccess(true);
    }
  }, [cartData]);

  return (
    <div className="container mx-auto py-10 px-4">
      {orderSuccess ? (
        <div className="text-center bg-red-500 text-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Oops!</h1>
          <p className="text-lg">Something went wrong with your order. Please try again.</p>
        </div>
      ) : (
        <div className="text-center bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Congratulations!Oops!</h1>
          <p className="text-lg">Your product order has been placed successfully. You will receive your order soon!</p>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const cartData = context.query.cart || null; // Fetch query param from URL
  return {
    props: {
      cartData
    }
  };
}

export default OrderSummaryPage;
