import React from 'react';

const Faqs = () => {
    return (
        <div className='bg-base-200 py-12 w-full px-2'>

            <h1 className='text-3xl font-semibold'>Frequently Asked Questions</h1>

            <div className="collapse bg-base-100 rounded-box w-full mx-auto my-8 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title">
                    <span className="text-xl">Specializations Certificates</span>
                </div>
                <div className="collapse-content">
                    <p className='text-justify'>A  Specialization is a series of related courses designed to help you master a specific topic.Some shorter Specializations include as few as three courses and only take a few months to finish. Longer Specializations can include ten or more courses and take up to a year. You can begin a Specialization byenrolling in the entire specializationor a single course in the Specialization.</p>
                </div>
            </div>

            <div className="collapse bg-base-100 rounded-box w-full mx-auto my-8 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title">
                    <span className="text-xl">Apply for Financial Aid or a Scholarship</span>
                </div>
                <div className="collapse-content">
                    <p className='text-justify'>If you can't afford to pay for a Certificate, you can apply for Financial Aid or a Scholarship through the link on the course home page. You can also view most course materials for free using the learners with Financial Aid or Scholarships in a course will be able to access all of the course content and complete all work required to earn a .Financial Aid and Scholarships only apply to the course that the application was approved for.</p>
                </div>
            </div>

            <div className="collapse bg-base-100 rounded-box w-full mx-auto my-8 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title">
                    <span className="text-xl">Video translations</span>
                </div>
                <div className="collapse-content">
                    <p className='text-justify'>To see translated subtitles for a video, turn subtitles on and choose the language you want to see subtitles in.You can see what languages are available for a course by checking the course's description page. If a language is listed, that means at least 80\% of the course's video subtitles have been translated. When you search for courses, you can filter your search to find courses that have translations in certain languages.Not all videos have subtitles in all languages. currently has limited support for right-to-left languages.</p>
                </div>
            </div>


            <div className="collapse bg-base-100 rounded-box w-full mx-auto my-8 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title">
                    <span className="text-xl">Edit and re-submit a peer reviewed assignment</span>
                </div>
                <div className="collapse-content">
                    <p className='text-justify'>If you want to make changes to a peer reviewed assignment after you submit it, you can edit and resubmit your assignment.You should only resubmit a peer reviewed assignment before your personalized deadline.If you don't pass a peer-reviewed assignment:You can re-submit the assignment to be graded againIf the deadline has passed, you may need to ask for more reviews on the forums</p>
                </div>
            </div>
        </div>
    );
};

export default Faqs;