// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config (copied from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDD4PMI-oVznfeQZvUavSVN6e4qyk5Dz0U",
  authDomain: "task-a3e65.firebaseapp.com",
  projectId: "task-a3e65",
  storageBucket: "task-a3e65.appspot.com",   // ✅ fixed
  messagingSenderId: "699800682579",
  appId: "1:699800682579:web:a4a923eacd847afdb286a6"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth
const auth = getAuth(app);
const provider = new GithubAuthProvider();

// ✅ Firestore
const db = getFirestore(app);

// ✅ Export
export { auth, provider, db };
