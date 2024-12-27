import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import img from "../assets/review.jpg";
import { FaStar, FaRegStar } from 'react-icons/fa';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import loading from "../assets/logo (2).png";


function SingleProduct() {
    const [data, setData] = useState(null);

    const storedData = JSON.parse(localStorage.getItem("productData")) || [];
    const [productData, setProductData] = useState(storedData);

    const { id } = useParams();
    const navigate = useNavigate();

    const payment = (data) => {
        const updatedProductData = [...productData, data];
        setProductData(updatedProductData);
        localStorage.setItem('productData', JSON.stringify(updatedProductData));
        console.log("Updated Product Data: ", updatedProductData);
        navigate("/ShoppingCart")
    };

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [id]);

    if (!data) {
        return <div className="flex items-center justify-center min-h-screen">
            <motion.img
                src={loading}
                alt="loading"
                width="200"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>

    }

    return (
        <>
            
                <Navbar />
            <div className='max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex justify-center'>
                    <img src={data.thumbnail} alt={data.title} className="w-full h-auto max-w-xs rounded-md shadow-md" />
                </div>

                <div className='flex flex-col justify-between'>
                    <div>
                        <div className='text-xl flex mb-2'>
                            {[...Array(5)].map((_, index) => {
                                if (index < data.rating) {
                                    return <FaStar key={index} className='text-yellow-400' />;
                                } else {
                                    return <FaRegStar key={index} className='text-yellow-400' />;
                                }
                            })}
                        </div>
                        <h1 className='text-3xl font-semibold mb-3'>{data.title}</h1>
                        <p className='text-base text-gray-600 mb-3'>{data.description}</p>
                        <p className='text-xl font-medium mb-3'>${data.price}</p>
                        <p className='text-sm mb-2'>In stock: <span className='text-red-500'>{data.stock} left</span></p>
                        <p className='text-sm text-gray-500'>{data.returnPolicy}</p>
                    </div>

                    <div className='flex flex-row gap-4 mt-4'>
                        <button onClick={() => payment(data)} className='bg-violet-700 text-lg text-white py-2 px-6 rounded-md transition-transform transform hover:scale-105 shadow'>Add To Cart
                        </button>
                        <Link to={"/Preview"} className='bg-neutral-400 text-lg text-white py-2 px-6 rounded-md transition-transform transform hover:scale-105 shadow'>
                            Preview
                        </Link>
                    </div>
                </div>

                <div className='mt-8 md:col-span-2'>
                    <h2 className='text-xl font-semibold mb-3'>Customer Reviews</h2>
                    {data.reviews && data.reviews.length > 0 ? (
                        data.reviews.map((review, index) => (
                            <div key={index} className='mb-3 p-3 border border-gray-300 rounded-md shadow-sm bg-white flex'>
                                <img src={img} alt="Reviewer" className='w-10 h-10 rounded-full mr-3' />
                                <div className='flex-1'>
                                    <p className='font-semibold text-md'>{review.reviewerName}</p>
                                    <p className='text-gray-700 text-sm'>{review.comment}</p>
                                    <p className='text-xs text-gray-500 italic'>{review.date}</p>
                                    <p className='text-sm'>{review.reviewerEmail}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No reviews available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default SingleProduct;
