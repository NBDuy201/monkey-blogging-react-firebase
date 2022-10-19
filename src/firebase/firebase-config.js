import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtIxRJkNC9ebyGYBFs5NTbWULTh0BCa3M",
  authDomain: "monkey-blogging-9ab0b.firebaseapp.com",
  projectId: "monkey-blogging-9ab0b",
  storageBucket: "monkey-blogging-9ab0b.appspot.com",
  messagingSenderId: "756136729697",
  appId: "1:756136729697:web:588056b2f7ebf1ec4fde20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
