// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWlTy5cqvLGfQd-rmLZ_kevRSMh0NHy1U",
  authDomain: "ema-john-simple-3c9b1.firebaseapp.com",
  projectId: "ema-john-simple-3c9b1",
  storageBucket: "ema-john-simple-3c9b1.appspot.com",
  messagingSenderId: "104977288838",
  appId: "1:104977288838:web:f4e37cac9b95eec2a30b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;