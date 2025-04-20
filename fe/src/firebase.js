import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX6iABR-0kwo01Gt5mELyqY6yvSQB-HKc",
  authDomain: "the-viking-of-the-web.firebaseapp.com",
  projectId: "the-viking-of-the-web",
  storageBucket: "the-viking-of-the-web.firebasestorage.app",
  messagingSenderId: "749225308599",
  appId: "1:749225308599:web:30776ff05b0a8a51693832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };