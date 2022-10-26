import React from 'react';
import { useContext } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import SideBar from '../../components/SideBar/SideBar';
import { CourseContext } from '../../context/CoursesProvider/CourseProvider';

const Courses = () => {
    const { courses } = useContext(CourseContext);

    return (

        <div className='grid grid-cols-4 lg:grid-cols-8 gap-2 bg-base-200'>
            <div className=" col-span-2">
                <SideBar></SideBar>
            </div>
            <div className='col-span-6'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {
                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;