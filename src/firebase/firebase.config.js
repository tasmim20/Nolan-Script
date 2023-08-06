// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCluscnBPg1lJp9B_yMTiq2U2XJRh1Ydh8",
  authDomain: "nolan-script.firebaseapp.com",
  projectId: "nolan-script",
  storageBucket: "nolan-script.appspot.com",
  messagingSenderId: "44717960790",
  appId: "1:44717960790:web:13c4a2e5446769d7c595f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;