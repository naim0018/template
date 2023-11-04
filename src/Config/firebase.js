// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoMA5p0P8pKmVcDhPa9li1szVVYDVGgmI",
  authDomain: "template-6ba6a.firebaseapp.com",
  projectId: "template-6ba6a",
  storageBucket: "template-6ba6a.appspot.com",
  messagingSenderId: "38042038545",
  appId: "1:38042038545:web:d0d28fc608c03cae865cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
