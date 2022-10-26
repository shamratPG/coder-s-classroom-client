import React, { createContext } from 'react';

import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    // Email Password Sign In 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Pop Up sign In 
    const providerLogin = provider => {
        return signInWithPopup(auth, provider)
    }

    //
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out 
    const logOut = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (newUser) => {
            setUser(newUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, providerLogin, logOut, createUser, userLogIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );


};

export default AuthProvider;