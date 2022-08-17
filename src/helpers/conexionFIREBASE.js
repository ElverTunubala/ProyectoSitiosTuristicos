// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Oa1l5ZTT5LrkUbmZcsQFelMBbcpBDOk",
  authDomain: "tiendatcc-f0bd6.firebaseapp.com",
  projectId: "tiendatcc-f0bd6",
  storageBucket: "tiendatcc-f0bd6.appspot.com",
  messagingSenderId: "272872103765",
  appId: "1:272872103765:web:724622d29acec5a2e259dc",
  measurementId: "G-P594SG33ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);