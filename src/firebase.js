// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFPv2mynG-tTagdk1x4bALgQeRYFxuA30",
  authDomain: "todo-app-e79c9.firebaseapp.com",
  projectId: "todo-app-e79c9",
  storageBucket: "todo-app-e79c9.appspot.com",
  messagingSenderId: "1049410527960",
  appId: "1:1049410527960:web:4426ee4e4a6e5b13c52dad",
  measurementId: "G-PNVJZK5C3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);