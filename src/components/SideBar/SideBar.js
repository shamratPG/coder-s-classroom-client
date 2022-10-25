import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const SideBar = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://coders-classroom-server.vercel.app/courses')
            .then(data => data.json())
            .then(result => {
                setCourses(result)
            })
            .catch(error => console.error(error))
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here  */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content text-center">
                    {/* Sidebar content here */}
                    {
                        courses.map(course => <li><Link>{course.name}</Link></li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default SideBar;