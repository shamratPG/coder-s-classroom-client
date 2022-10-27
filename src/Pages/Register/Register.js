import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThirdPartyLogin from '../../components/ThirdPartyLogin/ThirdPartyLogin';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, addProfile } = useContext(AuthContext);

    const [error, setError] = useState('');

    const createNewUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(((result) => {
                addProfile(name, photoURL)
                    .then(() => { setError('') }).catch(error => setError(error.message));
                console.log(result);
                form.reset();
            })).catch(error => setError(error.message));





    }

    return (
        <div className='py-12 bg-base-200 px-2'>
            <form onSubmit={createNewUser} className="form-control w-full sm:w-3/5 mx-auto bg-base-100 rounded-lg p-8 py-16 flex justify-center items-center shadow-lg">
                <h1 className='font-semibold text-2xl'>Please Sign Up</h1>
                <div className='my-5'>
                    <label className="input-group">
                        <span className='px-8'>Name</span>
                        <input name='name' type="name" className="input input-bordered" placeholder="Your Full Name" />
                    </label>
                </div>
                <div className='my-5'>
                    <label className="input-group">
                        <span className='px-8'>Photo</span>
                        <input name='photo' type="photo" className="input input-bordered" placeholder="Your Photo URL" />
                    </label>
                </div>
                <div className='my-5'>
                    <label className="input-group">
                        <span className='px-8'>Email</span>
                        <input name='email' type="email" className="input input-bordered" placeholder="Your Email" required />
                    </label>
                </div>
                <div className="my-5">
                    <label className="input-group">
                        <span>Password</span>
                        <input name='password' type="password" className="input input-bordered" placeholder="Password" required />
                    </label>
                </div>

                {
                    error && <p className="text-red-600">{error}</p>

                }
                <button type="submit" className='btn btn-primary my-4'>Sign Up</button>


                <p>Already have an account? <Link className='link link-primary' to='/login'>Log In</Link></p>

                <ThirdPartyLogin></ThirdPartyLogin>
            </form>
        </div>
    );
};

export default Register;