// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6L_ATii1wLAWeMLT4LiXjbD7wQoy9hDk",
  authDomain: "chatvibe-b7e07.firebaseapp.com",
  projectId: "chatvibe-b7e07",
  storageBucket: "chatvibe-b7e07.firebasestorage.app",
  messagingSenderId: "643801106725",
  appId: "1:643801106725:web:0d25db648303cc08a132cc",
  measurementId: "G-0Q4JZF74LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const database = getDatabase(app);