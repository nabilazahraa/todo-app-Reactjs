import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaiJIuFw5HZimR-q86lpkFeCRJ1ZbK51Q",
  authDomain: "todos-3588d.firebaseapp.com",
  projectId: "todos-3588d",
  storageBucket: "todos-3588d.appspot.com",
  messagingSenderId: "1005557120806",
  appId: "1:1005557120806:web:4ba74dcc69619b1bdd0be7",
  measurementId: "G-T5NTG5GXVN",
});

const db = firebaseApp.firestore();

export default db;
