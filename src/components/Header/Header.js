import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { FaSun, FaMoon, FaLaptopCode, FaUserAltSlash } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from 'react';
import { CourseContext } from '../../context/CoursesProvider/CourseProvider';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Header = () => {

    const { courses } = useContext(CourseContext);
    const { user, logOut } = useContext(AuthContext);


    const [theme, setTheme] = useState(true);

    const handleLogout = () => {
        logOut().then(() => { }).catch(e => console.error(e));
    }

    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, [])

    return (

        <div>
            <div className='sm:hidden'>
                <Link to='/home' className="btn btn-ghost normal-case text-xl"><FaLaptopCode></FaLaptopCode> <span className='pl-2'>Coder's Classroom</span></Link>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/faqs'>FAQs</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li >
                                <Link>
                                    All Courses
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">

                                    {
                                        courses.map(course => <li key={course.id}><Link to={`/courses/${course.id}`}>{course.name}</Link></li>)
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden sm:block'>
                        <Link to='/home' className="btn btn-ghost normal-case text-xl"><FaLaptopCode></FaLaptopCode> <span className='pl-2'>Coder's Classroom</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faqs'>FAQs</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">

                    {/* User Icon  */}
                    <div className=''>
                        {
                            user ?
                                <div className='tooltip tooltip-bottom tooltip-primary w-12 pt-2' data-tip={user.displayName}>
                                    <img className='rounded-full' src={user.photoURL} alt='User' />
                                </div>
                                :
                                <FaUserAltSlash></FaUserAltSlash>


                        }
                    </div>

                    {/* Log In Btn  */}
                    <div className='mx-4'>
                        {user ?

                            <Link onClick={handleLogout} className='btn btn-primary'>
                                Log Out
                            </Link> :
                            <Link className='btn btn-primary' to='/login'>
                                Log In
                            </Link>
                        }
                    </div>


                    {/* Theme Toggle Btn  */}
                    <div className='mr-4'>
                        {theme ?
                            <button onClick={() => setTheme(!theme)} className='mr-4' data-set-theme="dark">
                                <FaMoon></FaMoon>
                            </button> :
                            <button onClick={() => setTheme(!theme)} className='mr-4' data-set-theme="light">
                                <FaSun></FaSun>
                            </button>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;