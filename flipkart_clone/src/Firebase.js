// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJwT3rAC8bMkPBO2OKhJd_fC2OytBgkN8",
  authDomain: "login-83c05.firebaseapp.com",
  projectId: "login-83c05",
  storageBucket: "login-83c05.appspot.com",
  messagingSenderId: "72182753554",
  appId: "1:72182753554:web:ba8b18203dc4fd53302bcb",
  measurementId: "G-0J3PT4E0TR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
