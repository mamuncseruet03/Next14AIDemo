import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOs_5pSv89suwPOawhd_dQjZj6XOqWBPc",
  authDomain: "generateme-90b08.firebaseapp.com",
  projectId: "generateme-90b08",
  storageBucket: "generateme-90b08.appspot.com",
  messagingSenderId: "970061130469",
  appId: "1:970061130469:web:9adf2be585646cebf1420c",
  measurementId: "G-YWEG2NXW6E"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
