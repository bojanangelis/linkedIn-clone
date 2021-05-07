import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsVcNEkHRlq3vZ6I-lfrIpZuH1HlIpYpI",
  authDomain: "linkedin-clone-a8027.firebaseapp.com",
  projectId: "linkedin-clone-a8027",
  storageBucket: "linkedin-clone-a8027.appspot.com",
  messagingSenderId: "675785110210",
  appId: "1:675785110210:web:bc7e4d3cb0c06297de015b",
  measurementId: "G-EXJMGN4Y20",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
