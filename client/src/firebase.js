
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estates-7c9f4.firebaseapp.com",
  projectId: "mern-estates-7c9f4",
  storageBucket: "mern-estates-7c9f4.appspot.com",
  messagingSenderId: "391981402685",
  appId: "1:391981402685:web:96d97adc7b345b87deb854"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);