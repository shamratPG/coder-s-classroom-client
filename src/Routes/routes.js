import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import BlogItem from '../Pages/BlogItem/BlogItem';
import Blogs from '../Pages/Blogs/Blogs';
import CheckOut from '../Pages/CheckOut/CheckOut';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import Courses from '../Pages/Courses/Courses';
import Faqs from '../Pages/Faqs/Faqs';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import NotFound from '../Pages/NotFound/NotFound';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses/:courseId',
                element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => {
                    return fetch(`https://coders-classroom-server.vercel.app/courses/${params.courseId}`);
                }

            },
            {
                path: '/checkOut/:checkOutId',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://coders-classroom-server.vercel.app/courses/${params.checkOutId}`);
                }

            },
            {
                path: '/blogs/:blogId',
                element: <BlogItem></BlogItem>,
                loader: async ({ params }) => {
                    return fetch(`https://coders-classroom-server.vercel.app/blogs/${params.blogId}`);
                }

            },
            {
                path: '/*',
                element: <NotFound></NotFound>

            },

        ]
    }
])

export default routes;