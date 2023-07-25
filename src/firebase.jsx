import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJTDmy2SWW0WaMQhaY7hafesfs_XEovKY",
  authDomain: "react-notes-c859a.firebaseapp.com",
  projectId: "react-notes-c859a",
  storageBucket: "react-notes-c859a.appspot.com",
  messagingSenderId: "1065872189218",
  appId: "1:1065872189218:web:b6b76b60757a56fa54e77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
