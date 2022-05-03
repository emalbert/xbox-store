// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgP9Qz28Wl4EjshoC-UR-ODfxG1EYU4sM",
  authDomain: "coder-xbox-store.firebaseapp.com",
  projectId: "coder-xbox-store",
  storageBucket: "coder-xbox-store.appspot.com",
  messagingSenderId: "662367538358",
  appId: "1:662367538358:web:15c9c30fd5e71138beea17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;