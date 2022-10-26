import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://coders-classroom-server.vercel.app/courses')
            .then(data => data.json())
            .then(result => {
                setCourses(result)
            })
            .catch(error => console.error(error))
    }, [])

    const courseInfo = { courses }
    return (
        <CourseContext.Provider value={courseInfo}>
            {children}
        </CourseContext.Provider>
    );
};

export default CourseProvider;