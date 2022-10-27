import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, img } = course;

    const random = () => { // min and max included 
        return Math.floor(Math.random() * (200 - 100 + 1) + 100)
    }

    const price = random();

    return (
        <div className='bg-base-200 py-12'>

            <h1 className="text-4xl font-semibold mb-8">Check Out</h1>

            <div className="card bg-base-100 w-auto sm:w-[100vh] mx-auto shadow-xl">
                <figure><img src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold text-center mb-8">{name}</h2>
                    <div className="card-actions flex justify-around">
                        <span className="text-4xl">${price}</span>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;