import { initializeApp } from "firebase/app";
import {getDatabase} from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC1lEvuk0ZpYOCuxtV3FgQ8u5ACwxMjbbg",
    authDomain: "resturant-23bdf.firebaseapp.com",
    projectId: "resturant-23bdf",
    storageBucket: "resturant-23bdf.appspot.com",
    messagingSenderId: "872955923172",
    appId: "1:872955923172:web:c267ca7d77f1831f93faf1",
    measurementId: "G-ZPKYGT6R02"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);