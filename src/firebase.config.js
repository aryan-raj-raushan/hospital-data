import * as firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuvi2VXZ9YoqaS9NFo3D2ZE3NqufjC0lo",
  authDomain: "hospital-data-firebase-auth.firebaseapp.com",
  projectId: "hospital-data-firebase-auth",
  storageBucket: "hospital-data-firebase-auth.appspot.com",
  messagingSenderId: "1073038972445",
  appId: "1:1073038972445:web:e8f7029598dc1c751e58f4",
  measurementId: "G-CW56JCGN86"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export default firebaseApp;