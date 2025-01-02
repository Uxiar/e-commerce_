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
            <div className='grid max-w-5xl grid-cols-1 gap-6 p-6 mx-auto mt-32 md:grid-cols-2'>
                <div className='flex justify-center'>
                    <img src={data.thumbnail} alt={data.title} className="w-full h-auto max-w-xs rounded-md shadow-md" />
                </div>

                <div className='flex flex-col justify-between'>
                    <div>
                        <div className='flex mb-2 text-xl'>
                            {[...Array(5)].map((_, index) => {
                                if (index < data.rating) {
                                    return <FaStar key={index} className='text-yellow-400' />;
                                } else {
                                    return <FaRegStar key={index} className='text-yellow-400' />;
                                }
                            })}
                        </div>
                        <h1 className='mb-3 text-3xl font-semibold'>{data.title}</h1>
                        <p className='mb-3 text-base text-gray-600'>{data.description}</p>
                        <p className='mb-3 text-xl font-medium'>${data.price}</p>
                        <p className='mb-2 text-sm'>In stock: <span className='text-red-500'>{data.stock} left</span></p>
                        <p className='text-sm text-gray-500'>{data.returnPolicy}</p>
                    </div>

                    <div className='flex flex-row gap-4 mt-4'>
                        <button onClick={() => payment(data)} className='px-6 py-2 text-lg text-white transition-transform transform rounded-md shadow bg-violet-700 hover:scale-105'>Add To Cart
                        </button>
                        <Link to={"/Preview"} className='px-6 py-2 text-lg text-white transition-transform transform rounded-md shadow bg-neutral-400 hover:scale-105'>
                            Preview
                        </Link>
                    </div>
                </div>

                <div className='mt-8 md:col-span-2'>
                    <h2 className='mb-3 text-xl font-semibold'>Customer Reviews</h2>
                    {data.reviews && data.reviews.length > 0 ? (
                        data.reviews.map((review, index) => (
                            <div key={index} className='flex p-3 mb-3 bg-white border border-gray-300 rounded-md shadow-sm'>
                                <img src={img} alt="Reviewer" className='w-10 h-10 mr-3 rounded-full' />
                                <div className='flex-1'>
                                    <p className='font-semibold text-md'>{review.reviewerName}</p>
                                    <p className='text-sm text-gray-700'>{review.comment}</p>
                                    <p className='text-xs italic text-gray-500'>{review.date}</p>
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
