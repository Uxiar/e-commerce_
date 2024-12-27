import React from 'react';
import Navbar from './Navbar';

const Orders = () => {
  let ordersData = JSON.parse(localStorage.getItem("ordersData")) || [];
  console.log("ordersData", ordersData);

  return (
    <>
        <Navbar />
      <div className="lg:col-span-2 px-6 py-4">
        {ordersData.length > 0 ? (
          ordersData.map((data, index) => (
            <div
              className="flex flex-col lg:flex-row mb-6 p-4 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              key={index}
            >
              <div className="w-full lg:w-32 mb-4 lg:mb-0">
                <img
                  src={data.thumbnail}
                  alt={data.title}
                  className="w-full h-auto rounded-md shadow-md object-cover"
                />
              </div>

              <div className="flex-grow ml-0 lg:ml-6">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  {data.title}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Category: {data.category}
                </p>
                <p className="text-lg font-medium text-violet-600 mb-1">
                  ${data.price}
                </p>
                <p className="text-sm text-gray-400">
                  Shipping: {data.shippingInformation || 'Standard'}
                </p>
              </div>

              <div className="flex items-center lg:ml-6 mt-4 lg:mt-0">
                <p className="text-sm text-gray-600">Qty: 1</p>
              </div>

              <div className="lg:ml-6 mt-4 lg:mt-0">
                <p className="text-green-500 font-bold text-lg lg:text-2xl">
                  Order Placed
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">No orders found!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
