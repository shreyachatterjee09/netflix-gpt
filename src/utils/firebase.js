// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import {  setPersistence, browserSessionPersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb9XaUk4SDte1NquLeOP-8vD_FVlWRbAQ",
  authDomain: "netflixgpt-37f9b.firebaseapp.com",
  projectId: "netflixgpt-37f9b",
  storageBucket: "netflixgpt-37f9b.appspot.com",
  messagingSenderId: "678502364482",
  appId: "1:678502364482:web:2e5b89e3b4fde91471c4db",
  measurementId: "G-WWXKWBWL52"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//export const auth = getAuth();

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Set session persistence
setPersistence(auth, browserSessionPersistence);

export { auth }; 