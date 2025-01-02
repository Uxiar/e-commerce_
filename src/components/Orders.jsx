import React from 'react';
import Navbar from './Navbar';

const Orders = () => {
  let ordersData = JSON.parse(localStorage.getItem("ordersData")) || [];
  console.log("ordersData", ordersData);

  return (
    <>
        <Navbar />
      <div className="px-6 py-4 mt-28 lg:col-span-2">
        {ordersData.length > 0 ? (
          ordersData.map((data, index) => (
            <div
              className="flex flex-col p-4 mb-6 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-lg lg:flex-row hover:shadow-xl"
              key={index}
            >
              <div className="w-full mb-4 lg:w-32 lg:mb-0">
                <img
                  src={data.thumbnail}
                  alt={data.title}
                  className="object-cover w-full h-auto rounded-md shadow-md"
                />
              </div>

              <div className="flex-grow ml-0 lg:ml-6">
                <p className="mb-2 text-xl font-semibold text-gray-800">
                  {data.title}
                </p>
                <p className="mb-1 text-sm text-gray-500">
                  Category: {data.category}
                </p>
                <p className="mb-1 text-lg font-medium text-violet-600">
                  ${data.price}
                </p>
                <p className="text-sm text-gray-400">
                  Shipping: {data.shippingInformation || 'Standard'}
                </p>
              </div>

              <div className="flex items-center mt-4 lg:ml-6 lg:mt-0">
                <p className="text-sm text-gray-600">Qty: 1</p>
              </div>

              <div className="mt-4 lg:ml-6 lg:mt-0">
                <p className="text-lg font-bold text-green-500 lg:text-2xl">
                  Order Placed
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center">
            <p className="text-xl text-gray-600">No orders found!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
