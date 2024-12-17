// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY_SECURE,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN_SECURE,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID_SECURE,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET_SECURE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID_SECURE,
  appId: import.meta.env.VITE_FIREBASE_APPID_SECURE,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;