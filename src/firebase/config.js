import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzHEunU-mHj-M7TnXWJBwgSZkTIncFqkk",
  authDomain: "serafood-52846.firebaseapp.com",
  projectId: "serafood-52846",
  storageBucket: "serafood-52846.appspot.com",
  messagingSenderId: "429189524333",
  appId: "1:429189524333:web:ed773f391cdc4da4fec864",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db }; 
