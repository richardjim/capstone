import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXZVNTqLv9-VIjFmzP1VsE0V4-_lekCAM",
  authDomain: "app-chat-17f55.firebaseapp.com",
  projectId: "app-chat-17f55",
  storageBucket: "app-chat-17f55.appspot.com",
  messagingSenderId: "246702948737",
  appId: "1:246702948737:web:9f1c7deb56d99b448d6880"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
