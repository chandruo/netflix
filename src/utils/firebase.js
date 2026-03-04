// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtleeO7jqK6JMykizEy539x52twnlozlI",
  authDomain: "netflixgpt-4a2b1.firebaseapp.com",
  projectId: "netflixgpt-4a2b1",
  storageBucket: "netflixgpt-4a2b1.firebasestorage.app",
  messagingSenderId: "876813319907",
  appId: "1:876813319907:web:7c4207fed9d3616cf1cfd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth()