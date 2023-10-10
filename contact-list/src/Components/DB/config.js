import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA032klAkwH9_HY7IA99L28RoU7Q0QxD9Y",
    authDomain: "contact-list-swb.firebaseapp.com",
    projectId: "contact-list-swb",
    storageBucket: "contact-list-swb.appspot.com",
    messagingSenderId: "162055467011",
    appId: "1:162055467011:web:df4ec37dd3239daa045e36"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  export const db = getFirestore()