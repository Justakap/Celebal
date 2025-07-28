// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAzr3xfh_KkgMv1BVZ24tOO8ltLBbN_Ak",
  authDomain: "service-desk-app-410eb.firebaseapp.com",
  projectId: "service-desk-app-410eb",
  storageBucket: "service-desk-app-410eb.firebasestorage.app",
  messagingSenderId: "207588956983",
  appId: "1:207588956983:web:5c89cffa51e8a5235718b2",
  measurementId: "G-0Z2G2VP2GF"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
