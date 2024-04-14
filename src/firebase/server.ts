// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASEAPI_KEY,
  authDomain: "quizzers-2d01e.firebaseapp.com",
  projectId: "quizzers-2d01e",
  storageBucket: "quizzers-2d01e.appspot.com",
  messagingSenderId: "239803304497",
  appId: "1:239803304497:web:dc66d574dec6afbd726310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
