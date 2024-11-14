// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getFirestore} form "firebase/firesotre"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "marketplace-c75c0.firebaseapp.com",
  projectId: "marketplace-c75c0",
  storageBucket: "marketplace-c75c0.appspot.com",
  messagingSenderId: "473560176461",
  appId: "1:473560176461:web:02aecdee3d2e5d5b2f4904",
  measurementId: "G-BTHVDQJN43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)