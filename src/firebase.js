// create a likes/comments table
// comments - {username, comment, projectId}
// likes - {username,projectId}  -- filter all likes matching project Id, display who liked it upon a hover event?

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import.meta.env.VITE_SOME_KEY

// Your Firebase config here
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSANGER_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
