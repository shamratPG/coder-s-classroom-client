import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import SideBar from '../../components/SideBar/SideBar';
import NotFound from '../NotFound/NotFound';



const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, img, description } = course;


    if (!course) {
        return <NotFound></NotFound>
    }
    return (

        <div className='grid grid-cols-4 lg:grid-cols-8 gap-2 bg-base-200'>
            <div className=" col-span-2">
                <SideBar></SideBar>
            </div>
            <div className='col-span-6 my-2'>
                <div className='bg-base-200'>
                    <div className="card w-auto sm:w-[100vh] mx-auto my-12 shadow-xl" ref={ref}>
                        <figure><img src={img} alt="course" /></figure>
                        <div className="card-body">
                            <div className='flex justify-around items-center mb-6'>

                                <h2 className="text-center font-semibold text-2xl">{name}</h2>

                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button className='btn btn-outline btn-primary' onClick={toPdf}>Download Pdf</button>}
                                </Pdf>
                            </div>
                            <p className='text-justify' >{description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/checkOut/${id}`} className="btn btn-primary">Get premium access</Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default CourseDetails;