// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIGEh22YY2plv7-I_F78WOiskPcP7GUdw",
    authDomain: "coders-classroom-5ae3d.firebaseapp.com",
    projectId: "coders-classroom-5ae3d",
    storageBucket: "coders-classroom-5ae3d.appspot.com",
    messagingSenderId: "112492287935",
    appId: "1:112492287935:web:fa38bacc7aefbe9a77730a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;