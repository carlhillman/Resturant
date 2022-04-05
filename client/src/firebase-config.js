// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: "resturant-23bdf.firebaseapp.com",
  databaseURL: "https://resturant-23bdf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "resturant-23bdf",
  storageBucket: "resturant-23bdf.appspot.com",
  messagingSenderId: "872955923172",
  appId: "1:872955923172:web:c267ca7d77f1831f93faf1",
  measurementId: "G-ZPKYGT6R02"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;