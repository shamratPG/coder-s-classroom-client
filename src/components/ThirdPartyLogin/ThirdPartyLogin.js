import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ThirdPartyLogin = () => {

    const { providerLogin } = useContext(AuthContext);

    // Google Sign In 
    const googleProvider = new GoogleAuthProvider();

    // Github Sign In 
    const githubProvider = new GithubAuthProvider();


    // location 

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    //Sign In with pop up
    const handleSignIn = provider => {
        providerLogin(provider)
            .then(() => {
                navigate(from, { replace: true });
            }).catch(error => console.log(error))
    }
    return (
        <div className='flex flex-col justify-around'>
            <Link onClick={() => handleSignIn(googleProvider)} className='btn btn-outline my-4'><FaGoogle className='text-4xl pr-2'></FaGoogle> Log In with Google</Link>
            <Link onClick={() => handleSignIn(githubProvider)} className='btn btn-outline'><FaGithub className='text-4xl pr-2'></FaGithub> Log In with GitHub</Link>
        </div>
    );
};

export default ThirdPartyLogin;