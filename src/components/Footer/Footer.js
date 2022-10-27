import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
                <div className='flex flex-col items-center'>
                    <small>@copyright Md. Shamrat Hossain</small>
                </div>
                <div>
                    <span className="footer-title">
                        <Link className="link link-hover" to='/courses'>
                            Courses
                        </Link>
                    </span>

                </div>
                <div>
                    <span className="footer-title">
                        <Link className="link link-hover" to='/faqs'>
                            FAQs
                        </Link>
                    </span>
                </div>
                <div>
                    <span className="footer-title">
                        <Link className="link link-hover" to='/Blogs'>
                            Blogs
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;