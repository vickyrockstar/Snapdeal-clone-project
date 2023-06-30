// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDf-YZFUc5tl4eTWxZywBHFn9La0LtWUDA",
  authDomain: "snapdeal-clone-29b6a.firebaseapp.com",
  projectId: "snapdeal-clone-29b6a",
  storageBucket: "snapdeal-clone-29b6a.appspot.com",
  messagingSenderId: "78020645814",
  appId: "1:78020645814:web:d136ba95f9dd91ea02a717",
  measurementId: "G-QXF869P123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth= getAuth(app);
export {auth, db};