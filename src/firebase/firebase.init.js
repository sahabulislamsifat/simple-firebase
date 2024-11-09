//**Do not store config on the clint side. */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsrt3hLfcoLkmza36DdP3diALqCS6DcJU",
  authDomain: "simple-firebase-77122.firebaseapp.com",
  projectId: "simple-firebase-77122",
  storageBucket: "simple-firebase-77122.firebasestorage.app",
  messagingSenderId: "228358649501",
  appId: "1:228358649501:web:45b4aa76239dca82d04674",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
