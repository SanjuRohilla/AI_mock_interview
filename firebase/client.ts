// Import the functions you need from the SDKs you need

import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDZU2BA4F6g7NJHHqA5YD_FaJmjFBDOHLI",
    authDomain: "prepwise-ed847.firebaseapp.com",
    projectId: "prepwise-ed847",
    storageBucket: "prepwise-ed847.firebasestorage.app",
    messagingSenderId: "797025693848",
    appId: "1:797025693848:web:4dfee33ae14e383ce9e0ed",
    measurementId: "G-CSFM1L8LLS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);