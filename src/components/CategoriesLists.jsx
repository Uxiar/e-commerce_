import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from "framer-motion";
import loading from "../assets/logo (2).png";

function CategoriesLists() {
    const [data, setData] = useState();


    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

   
    if (!data) {
        return  <div className="flex items-center justify-center min-h-screen">
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
        <Navbar/>
            <div className='px-20 mt-32 mb-10 max-md:px-10 max-lg:px-16'>
                <h1 className='mb-6 text-2xl'>Shop by All Categories</h1>
                <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2'>
                    {data?.map((products, index) => (
                        <Link to={`/category/${products}`}
                            className='px-3 py-4 text-xl text-center transition bg-red-600 border rounded-lg shadow-lg text-neutral-100 max-sm:text-sm hover:bg-black duration-300transform hover:scale-105'
                            key={index}
                        >
                            {products}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );

}

export default CategoriesLists;
