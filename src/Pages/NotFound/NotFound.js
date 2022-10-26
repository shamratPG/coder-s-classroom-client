import React from 'react';
import { FaSadTear } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[63vh] bg-base-200'>

            <p className='font-semibold text-5xl text-warning'>404</p>
            <p>Page Not Found</p>
            <FaSadTear className='text-5xl mt-5'></FaSadTear>

        </div>
    );
};

export default NotFound;