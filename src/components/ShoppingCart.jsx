import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState(JSON.parse(localStorage.getItem("productData")) || []);

    let deleteProduct = (index) => {
        let UpadateData = [...Data];
        UpadateData.splice(index, 1);
        setData(UpadateData);
        localStorage.setItem("productData", JSON.stringify(UpadateData));
    };

    const shippingCost = Data.length * 5;
    const taxCost = Data.length * 3;
    const subtotal = Data.reduce((acc, product) => acc + product.price, 0);
    let updateSubtotal = subtotal.toFixed(2);

    const total = (shippingCost + taxCost + parseFloat(updateSubtotal)).toFixed(2);

    let checkoutHandler = () => {
        navigate("/payment");
    };

    return (
        <>
            <Navbar />
            <div className="p-6 mx-auto mt-28 max-w-7xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>

                {Data.length === 0 ? (
                    <div className="mt-6 text-lg font-medium text-center text-gray-600">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            {Data.map((data, index) => (
                                <div
                                    className="relative flex flex-row p-4 mb-6 bg-white border border-gray-300 rounded-lg shadow-sm max-sm:flex-col max-sm:gap-2"
                                    key={index}
                                >
                                    <div className="w-32 max-sm:w-full">
                                        <img
                                            src={data.thumbnail}
                                            alt={data.title}
                                            className="w-full h-auto rounded-md shadow-md"
                                        />
                                    </div>
                                    <div className="flex-grow ml-6">
                                        <p className="mb-2 text-xl font-semibold">{data.title}</p>
                                        <p className="mb-1 text-gray-600">Category: {data.category}</p>
                                        <p className="mb-1 text-lg font-medium text-violet-700">${data.price}</p>
                                        <p className="text-sm text-gray-500">
                                            Shipping: {data.shippingInformation || 'Standard'}
                                        </p>
                                    </div>

                                    <div className="flex items-center ml-6">
                                        <label className="block mb-1 mr-2 text-sm font-medium">Qty:</label>
                                        <select className="px-3 py-1 border border-gray-300 rounded-md">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                    <div className="ml-6">
                                        <button
                                            onClick={() => deleteProduct(index)}
                                            className="absolute top-0 text-2xl font-bold text-red-600 right-2"
                                        >
                                            &#215;
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-gray-100 border rounded-lg shadow-sm">
                            <h2 className="mb-6 text-2xl font-semibold">Order Summary</h2>

                            <div className="flex justify-between mb-4">
                                <p className="text-gray-600">Subtotal</p>
                                <p className="text-gray-800">${updateSubtotal}</p>
                            </div>

                            <div className="flex justify-between mb-4">
                                <p className="text-gray-600">Shipping Estimate</p>
                                <p className="text-gray-800">${shippingCost}</p>
                            </div>

                            <div className="flex justify-between mb-4">
                                <p className="text-gray-600">Tax Estimate</p>
                                <p className="text-gray-800">${taxCost}</p>
                            </div>

                            <div className="flex justify-between pt-4 mt-4 border-t-2">
                                <p className="text-lg font-semibold">Order Total</p>
                                <p className="text-lg font-semibold">${total}</p>
                            </div>

                            <button
                                onClick={checkoutHandler}
                                className="w-full px-6 py-3 mt-6 text-lg text-white transition-transform transform rounded-md bg-violet-700 hover:scale-105"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ShoppingCart;
