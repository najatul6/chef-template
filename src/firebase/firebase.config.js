// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyd0c5kt2maFnfZP4aBShwgI9CKM6yyZM",
  authDomain: "chef-note.firebaseapp.com",
  projectId: "chef-note",
  storageBucket: "chef-note.appspot.com",
  messagingSenderId: "789656932914",
  appId: "1:789656932914:web:a28d9f2dd2ba29eff1622b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;