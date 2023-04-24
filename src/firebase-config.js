import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz8WSlo_DIxv84_hmYQgLVi2LdFZBOnv8",
  authDomain: "react-reminder-8c1fb.firebaseapp.com",
  projectId: "react-reminder-8c1fb",
  storageBucket: "react-reminder-8c1fb.appspot.com",
  messagingSenderId: "838118902523",
  appId: "1:838118902523:web:4337be439d215fff0cbe5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const db = getFirestore(app);

 export {db,auth}