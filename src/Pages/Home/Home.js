import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <img src="https://github.com/shamratPG/images/blob/main/codersClassroom/heroImage.jpg?raw=true" className="max-w-lg rounded-lg shadow-2xl" alt='This is a coders' />
                <div className="px-4">
                    <h1 className="text-5xl font-bold">Learn to Code</h1>
                    <p className="py-6">Coding is The New Literacy. Start Learning today. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;