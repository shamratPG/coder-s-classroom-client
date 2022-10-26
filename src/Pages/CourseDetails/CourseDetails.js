import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, img, description } = course;
    return (
        <div className='bg-base-200 py-8'>
            <div className="card w-auto sm:w-[100vh] mx-auto my-12 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">{name}</h2>
                    <p className='text-justify' >{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;