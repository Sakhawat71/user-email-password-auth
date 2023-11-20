// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlrX7p8k-PGuR-Fy2FmluPJd6KdS0kOpg",
  authDomain: "user-email-password-auth-71.firebaseapp.com",
  projectId: "user-email-password-auth-71",
  storageBucket: "user-email-password-auth-71.appspot.com",
  messagingSenderId: "706788467840",
  appId: "1:706788467840:web:ece62680ac365dc996b265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;