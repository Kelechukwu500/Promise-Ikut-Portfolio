// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuZFHvJ7u9UN8GkjT17qmakyAU-7BF0Ew",
  authDomain: "promise-ikut.firebaseapp.com",
  projectId: "promise-ikut",
  storageBucket: "promise-ikut.firebasestorage.app",
  messagingSenderId: "1026347636032",
  appId: "1:1026347636032:web:e228fb1cfee66b55d456a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Firestore Database
export const db = getFirestore(app);

export default app;
