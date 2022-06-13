// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCa4Y3gzn9H1--Vgi0LtjqiL5bt6Qx5L74",
  authDomain: "quizgame-1dea7.firebaseapp.com",
  projectId: "quizgame-1dea7",
  storageBucket: "quizgame-1dea7.appspot.com",
  messagingSenderId: "336810556146",
  appId: "1:336810556146:web:43ee1ce7df192408d86e6b",
  measurementId: "G-Q5X1VCL5RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const storage = getStorage(app);