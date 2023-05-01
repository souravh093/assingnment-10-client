// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMjdlL1ZZk3_s-HTk7IX6wzQeCcU_AUmk",
  authDomain: "chip-recipe-client.firebaseapp.com",
  projectId: "chip-recipe-client",
  storageBucket: "chip-recipe-client.appspot.com",
  messagingSenderId: "355119309373",
  appId: "1:355119309373:web:4cd46d874e26243b6c4054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;