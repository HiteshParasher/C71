import firebase from "firebase";
require("@firebase/firestore");


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFZXhKlxHzJATGkybNK20-mRl1r4hp04I",
  authDomain: "bicycles-doc-id.firebaseapp.com",
  projectId: "bicycles-doc-id",
  storageBucket: "bicycles-doc-id.appspot.com",
  messagingSenderId: "1040628614946",
  appId: "1:1040628614946:web:f2f0fa264710ed3914c77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


