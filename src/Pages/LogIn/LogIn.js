import React from 'react';
import { Link } from 'react-router-dom';
import ThirdPartyLogin from '../../components/ThirdPartyLogin/ThirdPartyLogin';

const LogIn = () => {
    return (
        <div className='py-12 bg-base-200 px-2'>
            <form className="form-control w-full sm:w-3/5 mx-auto bg-base-100 rounded-lg p-8 py-16 flex justify-center items-center shadow-lg">
                <h1 className='font-semibold text-2xl'>Please Log In</h1>
                <div className='my-5'>
                    <label className="input-group">
                        <span className='px-8'>Email</span>
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered" />
                    </label>
                </div>
                <div className="my-5">
                    <label className="input-group">
                        <span>Password</span>
                        <input name='password' type="password" placeholder="Your Password" className="input input-bordered" />
                    </label>
                </div>
                <button type="submit" className='btn btn-primary my-4'>Log In</button>
                <p>Do not have account? <Link className='link link-primary' to='/register'>Register here</Link></p>
                <ThirdPartyLogin></ThirdPartyLogin>
            </form>
        </div>
    );
};

export default LogIn;