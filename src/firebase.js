// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBm6_rGN-lO5JAi5mmR0Mid4w-xAdT8U0",
  authDomain: "sampleapp-a8c61.firebaseapp.com",
  projectId: "sampleapp-a8c61",
  storageBucket: "sampleapp-a8c61.firebasestorage.app",
  messagingSenderId: "1016158960152",
  appId: "1:1016158960152:web:b207fa360bbb556f18216d",
  measurementId: "G-LCMGV15XCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const firestore = getFirestore(app);

export {firestore};

export { auth, provider, signInWithPopup };
