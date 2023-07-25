import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi0VK6gF9iTGlvQjCu7j9T1zkVlBMkv3Q",
  authDomain: "challenge-6333a.firebaseapp.com",
  projectId: "challenge-6333a",
  storageBucket: "challenge-6333a.appspot.com",
  messagingSenderId: "87336358997",
  appId: "1:87336358997:web:b439010b8c7ccf4d91f0dc",
  measurementId: "G-B5RYWYW92H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
