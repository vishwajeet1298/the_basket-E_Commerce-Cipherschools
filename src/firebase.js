// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4ieo642Gk5MB64oOU_ZEBJ-LMwmyfvSo",
  authDomain: "tokri-the-basket.firebaseapp.com",
  projectId: "tokri-the-basket",
  storageBucket: "tokri-the-basket.appspot.com",
  messagingSenderId: "130005841367",
  appId: "1:130005841367:web:4d052018c189dc27bac792",
  measurementId: "G-YL5VMHVN3X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db=firebase.firestore();
const auth=firebase.auth();

export {auth,app};
export default db;