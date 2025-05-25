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
  apiKey: "AIzaSyBsOpdMZrohGh18aDx2Ihfk4mTiqGpaW60",
  authDomain: "chatvibe-3db02.firebaseapp.com",
  databaseURL: "https://chatvibe-3db02-default-rtdb.firebaseio.com",
  projectId: "chatvibe-3db02",
  storageBucket: "chatvibe-3db02.firebasestorage.app",
  messagingSenderId: "807754136281",
  appId: "1:807754136281:web:f36c5c52100f872b045cc8",
  measurementId: "G-ZFPWWVK3P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
export const auth=getAuth(app);
export const database = getDatabase(app);
export { db };