// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-oD6WpuZXnV2LALPiNATOy0sSLiFowLI",
  authDomain: "bazarproject-9b308.firebaseapp.com",
  databaseURL:
    "https://bazarproject-9b308-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bazarproject-9b308",
  storageBucket: "bazarproject-9b308.appspot.com",
  messagingSenderId: "640990189481",
  appId: "1:640990189481:web:d7a56d3054feea851b16b8",
  measurementId: "G-M4TYMJZN61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
