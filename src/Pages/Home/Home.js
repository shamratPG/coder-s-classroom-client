import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero w-auto min-h-[70vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <img src="https://github.com/shamratPG/images/blob/main/codersClassroom/heroImage.jpg?raw=true" className="max-w-lg rounded-lg shadow-2xl w-full" alt='Hero' />
                <div className="px-4">
                    <h1 className="text-5xl font-bold">Learn to Code</h1>
                    <p className="py-6">Coding is The New Literacy. Start Learning today. </p>
                    <Link to='/courses' className="btn btn-primary">

                        Get Started

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;