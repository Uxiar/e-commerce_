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
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

                {Data.length === 0 ? (
                    <div className="text-center text-gray-600 text-lg font-medium mt-6">
                        Your cart is empty.
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            {Data.map((data, index) => (
                                <div
                                    className="flex flex-row max-sm:flex-col max-sm:gap-2 relative mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
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
                                        <p className="text-xl font-semibold mb-2">{data.title}</p>
                                        <p className="text-gray-600 mb-1">Category: {data.category}</p>
                                        <p className="text-lg font-medium text-violet-700 mb-1">${data.price}</p>
                                        <p className="text-sm text-gray-500">
                                            Shipping: {data.shippingInformation || 'Standard'}
                                        </p>
                                    </div>

                                    <div className="ml-6 flex items-center">
                                        <label className="block text-sm font-medium mb-1 mr-2">Qty:</label>
                                        <select className="border border-gray-300 rounded-md py-1 px-3">
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
                                            className="text-red-600 font-bold text-2xl top-0 right-2 absolute"
                                        >
                                            &#215;
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border p-6 bg-gray-100 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

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

                            <div className="flex justify-between mt-4 pt-4 border-t-2">
                                <p className="font-semibold text-lg">Order Total</p>
                                <p className="font-semibold text-lg">${total}</p>
                            </div>

                            <button
                                onClick={checkoutHandler}
                                className="bg-violet-700 text-white text-lg py-3 px-6 rounded-md w-full mt-6 transition-transform transform hover:scale-105"
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
