import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2x99eXBJDf5b5KqXFZFXbvhTQ8_nffZM",
    authDomain: "react-app-e409e.firebaseapp.com",
    projectId: "react-app-e409e",
    storageBucket: "react-app-e409e.appspot.com",
    messagingSenderId: "912965726820",
    appId: "1:912965726820:web:c575af9d3007d8bea3a571"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);