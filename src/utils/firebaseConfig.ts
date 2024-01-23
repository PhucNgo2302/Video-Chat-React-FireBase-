// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection,getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPI5eTRcyFD5y3idaWc9KT9szaplOtJLE",
  authDomain: "zoom-clone-4ce96.firebaseapp.com",
  projectId: "zoom-clone-4ce96",
  storageBucket: "zoom-clone-4ce96.appspot.com",
  messagingSenderId: "51020304333",
  appId: "1:51020304333:web:28f4b823dd019e4fe3be84",
  measurementId: "G-2J9ZW07TWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB,"users")
export const meetingsRef = collection(firebaseDB, "meetings");
