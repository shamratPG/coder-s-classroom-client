import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import Courses from '../Pages/Courses/Courses';
import Faqs from '../Pages/Faqs/Faqs';
import Home from '../Pages/Home/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faqs',
                element: <Faqs></Faqs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/courses/:courseId',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
])

export default routes;