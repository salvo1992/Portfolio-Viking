import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDX6iABR-0kwo01Gt5mELyqY6yvSQB-HKc",
    authDomain: "the-viking-of-the-web.firebaseapp.com",
    projectId: "the-viking-of-the-web",
    storageBucket: "the-viking-of-the-web.firebasestorage.app",
    messagingSenderId: "749225308599",
    appId: "1:749225308599:web:30776ff05b0a8a51693832"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };