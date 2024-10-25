// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKDOvb5O85IDwx1PfJ7JyGt3u5i-ztpSQ",
  authDomain: "netflix-dc94d.firebaseapp.com",
  projectId: "netflix-dc94d",
  storageBucket: "netflix-dc94d.appspot.com",
  messagingSenderId: "703636563187",
  appId: "1:703636563187:web:28bd352572149735850386",
  measurementId: "G-ZB5ED48KJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// npm install -g firebase-tools
