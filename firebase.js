// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDV2FJ1k_mvSPyTry3u-7sIU4I4GdAspA",
  authDomain: "inventory-management-app-5f6fc.firebaseapp.com",
  projectId: "inventory-management-app-5f6fc",
  storageBucket: "inventory-management-app-5f6fc.appspot.com",
  messagingSenderId: "270486602269",
  appId: "1:270486602269:web:2574d94350cd1651667cf4",
  measurementId: "G-ZRQWVHZXGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };