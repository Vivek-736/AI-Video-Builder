// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vidgenius-4ad7e.firebaseapp.com",
  projectId: "vidgenius-4ad7e",
  storageBucket: "vidgenius-4ad7e.firebasestorage.app",
  messagingSenderId: "57678161119",
  appId: "1:57678161119:web:f785a069aec6a16582f56a",
  measurementId: "G-K01SYB2MQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
