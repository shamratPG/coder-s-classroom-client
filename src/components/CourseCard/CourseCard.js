import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, img, description } = course;
    return (
        <div className='col-span-2 flex justify-center my-8 mx-4'>
            <div className="card w-96 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 120)}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary" to={`/courses/${id}`}>See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;