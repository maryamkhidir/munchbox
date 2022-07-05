import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKmuTx2xdeMJ4Ok6AcMkaqgfBPjDajJxE",
  authDomain: "munchbox-2022.firebaseapp.com",
  databaseURL: "https://munchbox-2022-default-rtdb.firebaseio.com",
  projectId: "munchbox-2022",
  storageBucket: "munchbox-2022.appspot.com",
  messagingSenderId: "779948390719",
  appId: "1:779948390719:web:3285b827859eab6c22bb8a",
  measurementId: "G-LE0ZGGXW13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export default app