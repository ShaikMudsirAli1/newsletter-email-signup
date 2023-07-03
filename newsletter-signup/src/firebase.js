import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// npm i firebase.
const firebaseConfig = {
  apiKey: "AIzaSyAdNHYnDEGLWIUwwaLknF-5F3TpvL3Y35E",
  authDomain: "newsletter-signup-c7681.firebaseapp.com",
  projectId: "newsletter-signup-c7681",
  storageBucket: "newsletter-signup-c7681.appspot.com",
  messagingSenderId: "937242087925",
  appId: "1:937242087925:web:7b8b61ace58b745a27d0bc",
};

// Initialize the app.
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
