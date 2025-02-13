
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ6WPtBmlUqbhE-spnAASceErq3U5KM2E",
  authDomain: "e-commerce-35653.firebaseapp.com",
  projectId: "e-commerce-35653",
  storageBucket: "e-commerce-35653.firebasestorage.app",
  messagingSenderId: "796716057050",
  appId: "1:796716057050:web:a5815e13cffe78d1d580e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)