import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//My Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKM7mgoA1aGtd_ocIGs2SHPUg_z7E32kQ",
    authDomain: "todo-react-490c1.firebaseapp.com",
    projectId: "todo-react-490c1",
    storageBucket: "todo-react-490c1.appspot.com",
    messagingSenderId: "1037559560523",
    appId: "1:1037559560523:web:cc8cf90c0bb930abae10ce",
    measurementId: "G-2NNQBQ0PGB"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };