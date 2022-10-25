import React from 'react';

const CourseCard = ({ course }) => {
    const { name, img, description } = course;
    console.log(course);
    return (
        <div className='col-span-2 flex justify-center my-8'>
            <div className="card w-96 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 120)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;