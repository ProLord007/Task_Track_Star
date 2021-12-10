// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHbj1_yuM2FLyMNGfzv15uBBJ_aLB3ibs",
  authDomain: "task-star.firebaseapp.com",
  projectId: "task-star",
  storageBucket: "task-star.appspot.com",
  messagingSenderId: "307894135123",
  appId: "1:307894135123:web:e42fe3732c9a78d44759a6",
  measurementId: "G-1XYS53GG0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
