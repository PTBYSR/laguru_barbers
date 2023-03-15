// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgDlbZGZO7X6GI9xtrlIVSFvLLr1cjARo",
  authDomain: "laguru-barbers.firebaseapp.com",
  projectId: "laguru-barbers",
  storageBucket: "laguru-barbers.appspot.com",
  messagingSenderId: "798801979942",
  appId: "1:798801979942:web:a92e3cf1d5ea04035cd4e7",
  measurementId: "G-G768YWM0KJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
