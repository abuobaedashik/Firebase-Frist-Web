
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDR6AmAR3y9XEo_rMRtiKh9EpzHDPG6hyU",
    authDomain: "frist-firebase-cefdf.firebaseapp.com",
    projectId: "frist-firebase-cefdf",
    storageBucket: "frist-firebase-cefdf.firebasestorage.app",
    messagingSenderId: "385212777545",
    appId: "1:385212777545:web:0c743ff25009fceee0eb98",
    measurementId: "G-408994GC46"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);