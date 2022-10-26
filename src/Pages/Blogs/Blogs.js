import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://coders-classroom-server.vercel.app/blogs')
            .then(data => data.json())
            .then(result => setBlogs(result))
            .catch(error => console.error(error));
    }, [])
    return (
        <div className='bg-base-200'>
            <h1 className='text-3xl pt-16 pb-12'>Recent Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-12 pb-12'>

                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;