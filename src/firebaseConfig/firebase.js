// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRCrqVQ8Mrj8xBHRgwrALCya7mNUZqcgM",
  authDomain: "crud-react-firebase-996f0.firebaseapp.com",
  projectId: "crud-react-firebase-996f0",
  storageBucket: "crud-react-firebase-996f0.appspot.com",
  messagingSenderId: "728453099078",
  appId: "1:728453099078:web:03ea067407527dcf0fe447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);