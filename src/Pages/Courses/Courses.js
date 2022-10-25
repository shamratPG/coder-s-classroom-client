import React from 'react';
import { useContext } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import SideBar from '../../components/SideBar/SideBar';
import { CourseContext } from '../../context/CoursesProvider/CourseProvider';

const Courses = () => {
    const { courses } = useContext(CourseContext);

    return (
        <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 bg-base-200'>
            <SideBar className="col-span-1"></SideBar>
            <div className='col-span-3'>
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