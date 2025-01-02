import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';


function bestsellersDisplay() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [id]);

   
    return (
        <>
                <Navbar/>
            <div className='p-10 mt-20'>
                <h1 className='mb-10 text-4xl text-center'>Products in {category}</h1>
                <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    {products?.map((product) => (
                        <div key={product.id} className='p-4 border shadow-md'>
                            <img src={product.thumbnail} alt={product.title} className='object-cover w-full h-40' />
                            <h3 className='mt-2 text-lg'>{product.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default bestsellersDisplay;
