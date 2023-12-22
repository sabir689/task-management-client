// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6UorCNideuYz4oMOJKdPqTk49VGBH8qo",
    authDomain: "task-management-94a11.firebaseapp.com",
    projectId: "task-management-94a11",
    storageBucket: "task-management-94a11.appspot.com",
    messagingSenderId: "475293025988",
    appId: "1:475293025988:web:20c71db5b49c90a821eb91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);