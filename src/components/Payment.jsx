import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  let productData = JSON.parse(localStorage.getItem("productData")) || [];
  console.log("payment", productData);

  let subtotal = productData.reduce((acc, product) => acc + product.price, 0);
  let updateSubtotal = subtotal.toFixed(2);

  let ShippingCost = productData.length * 5;
  let taxCost = productData.length * 3;

  let total = (ShippingCost + taxCost + parseFloat(updateSubtotal)).toFixed(2);

  const paymentButton = () => {
    const ordersData = JSON.parse(localStorage.getItem("ordersData")) || [];
    ordersData.push(...productData);

    localStorage.setItem("ordersData", JSON.stringify(ordersData));

    localStorage.removeItem("productData");

    navigate("/");

    console.log("Orders Data:", ordersData);
  };

  return (
    <div className="grid gap-6 p-4 bg-gray-100 min-h-screen">
      <div className="bg-indigo-600 text-neutral-50 p-4 shadow-md rounded-md">
        <div className="space-y-2">
          {productData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row max-sm:flex-col justify-between items-center border-b"
            >
              <img src={item.thumbnail} className="h-28" />
              <h1 className="mb-3 font-bold">{item.title}</h1>
              <p className="text-xl font-medium mb-3">${item.price}</p>
            </div>
          ))}
          <div className="flex justify-between">
            <p className="text-base font-semibold">Subtotal</p>
            <p className="text-base">${updateSubtotal}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-base font-semibold">Shipping</p>
            <p className="text-base">${ShippingCost}</p>
          </div>
          <div className="flex justify-between border-b mb-4">
            <p className="text-base font-semibold">Taxes</p>
            <p className="text-base">${taxCost}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-base font-semibold">Total</p>
            <p className="text-base">${total}</p>
          </div>
        </div>
      </div>
      <form>
        <div className="bg-white p-4 shadow-md rounded-md">
          <p className="text-lg font-semibold mb-2">Contact Information</p>
          <div className="flex flex-col gap-2 max-sm:items-center max-sm:flex-row   ">
            <label className="font-medium text-sm">Enter Email:</label>
            <input
              required
              type="email"
              placeholder="Enter Email"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">
          <p className="text-lg font-semibold mb-2">Payment Details</p>
          <div className="flex flex-col max-sm:items-center max-sm:flex-row max-sm:space-x-2 ">
            <label className="font-medium text-sm">Card Number:</label>
            <input
              required
              type="number"
              placeholder="Enter Card Number"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 space-x-2 mt-3">
            <div className="flex flex-col  max-sm:items-center max-sm:flex-row max-sm:space-x-2">
              <label className="font-medium text-sm">Expiry Date (MM/YY) </label>
              <input
                required
                type="number"
                placeholder="MM/YY"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>
            <div className="flex flex-col w-1/2 max-sm:items-center max-sm:flex-row max-sm:space-x-2">
              <label className="font-medium text-sm">CVC</label>
              <input
                required
                type="number"
                placeholder="CVC"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">
          <p className="text-lg font-semibold mb-2">Shipping Address</p>
          <div className="space-y-4 ">
          <div className="flex  max-sm:flex-col space-x-4 max-sm:gap-2">
              <div className="flex flex-col w-1/3 max-sm:items-center max-sm:flex-row max-sm:space-x-2">
                <label className="font-medium text-sm">Address</label>
                <input
                  required
                  type="text"
                  placeholder="Enter Address"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
              <div className="flex flex-col w-1/3 max-sm:items-center max-sm:flex-row max-sm:space-x-2">
                <label className="font-medium text-sm">City</label>
                <input
                  required
                  type="text"
                  placeholder="Enter City"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
            </div>
            
            
            <div className="flex max-sm:flex-col space-x-4 max-sm:gap-2">
              
              <div className="flex flex-col w-1/3 max-sm:items-center max-sm:flex-row max-sm:space-x-2 ">
                <label className="font-medium text-sm">State/Province</label>
                <input
                  required
                  type="text"
                  placeholder="Enter State/Province"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
              <div className="flex flex-col  max-sm:items-center max-sm:flex-row max-sm:space-x-2">
                <label className="font-medium text-sm">Postal Code</label>
                <input
                  required
                  type="text"
                  placeholder="Enter Postal Code"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">
          <p className="text-lg font-semibold mb-2">Billing Information</p>
          <div className="flex items-center space-x-2">
            <input
              required
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <p className="font-medium text-sm">Same as shipping information</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={paymentButton}
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-300 text-sm"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
