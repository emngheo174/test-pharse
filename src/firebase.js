import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCbd0BKDfXIaEYQSeHzFPBbeLcYsrM-YM8",
    authDomain: "testpharse.firebaseapp.com",
    projectId: "testpharse",
    storageBucket: "testpharse.appspot.com",
    messagingSenderId: "350765989472",
    appId: "1:350765989472:web:f125d3dd19b03452728d05",
    measurementId: "G-FB5KGQ2DEH",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
 export const db = getFirestore(app);