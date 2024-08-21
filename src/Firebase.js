
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCaqJ8HojXgAGGgSQYg3Ay3WKubtsDhcdY",
  authDomain: "login-4dec7.firebaseapp.com",
  databaseURL: "https://login-4dec7-default-rtdb.firebaseio.com",
  projectId: "login-4dec7",
  storageBucket: "login-4dec7.appspot.com",
  messagingSenderId: "360106804471",
  appId: "1:360106804471:web:5d462f6127639766ec3ff2",
  measurementId: "G-51V8RTZE6J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth , storage };



