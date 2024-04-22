// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, currentUser } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6j0GZDYZE-L0yjHk4gUcfzzL9T0v8GIk",
  authDomain: "wake-park.firebaseapp.com",
  projectId: "wake-park",
  storageBucket: "wake-park.appspot.com",
  messagingSenderId: "187831347855",
  appId: "1:187831347855:web:0c44c591160fccda4d5efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const getCurrentUser = () => {
  return auth.currentUser;
};

export { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, getCurrentUser };