import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChN2YZv38AeX5EEcF3J9cQftCFIiYM02w",
  authDomain: "businessapp-cac12.firebaseapp.com",
  databaseURL: "https://businessapp-cac12.firebaseio.com",
  projectId: "businessapp-cac12",
  storageBucket: "",
  messagingSenderId: "463706460057",
  appId: "1:463706460057:web:e063ffde8d45ce46"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
