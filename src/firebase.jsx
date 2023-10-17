import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FB_PROJETID,
  storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FB_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
