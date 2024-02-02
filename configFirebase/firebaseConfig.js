// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBVPbxTUn2lBoVlW6eIq-mSBxcFlXux3lo",

  authDomain: "loginauth-9fbb6.firebaseapp.com",

  databaseURL: "https://loginauth-9fbb6-default-rtdb.firebaseio.com",

  projectId: "loginauth-9fbb6",

  storageBucket: "loginauth-9fbb6.appspot.com",

  messagingSenderId: "442754173088",

  appId: "1:442754173088:web:bf2ea916146d57cece21c5",

  measurementId: "G-D6C3XZNN0B"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };