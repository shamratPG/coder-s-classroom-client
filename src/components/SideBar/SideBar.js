import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../../context/CoursesProvider/CourseProvider';



const SideBar = () => {

    const { courses } = useContext(CourseContext)
    return (
        <div className="drawer drawer-mobile hidden lg:block">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here  */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">See Courses</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content text-center">
                    {/* Sidebar content here */}
                    {
                        courses.map(course => <li key={course.id}><Link>{course.name}</Link></li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default SideBar;