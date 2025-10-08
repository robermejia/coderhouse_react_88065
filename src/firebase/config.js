
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGKM493BtYyIHZyeFkXNETJ-5APDI8Lnk",
  authDomain: "react-coder-88065.firebaseapp.com",
  projectId: "react-coder-88065",
  storageBucket: "react-coder-88065.firebasestorage.app",
  messagingSenderId: "680484880299",
  appId: "1:680484880299:web:f7cf7b8cb3a1aa453b9cee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);