import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { id, img, name, description } = blog;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl col-span-1 mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-start'>{description.slice(0, 200)}
                        ... <Link className='link link-primary' to={`/blogs/${id}`}>read more</Link></p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;