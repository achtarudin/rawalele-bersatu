// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU0XnNIQ_a1IZ_VtBuvfS1fK5azIroHR0",
  authDomain: "rawalele-bersatu.firebaseapp.com",
  projectId: "rawalele-bersatu",
  storageBucket: "rawalele-bersatu.appspot.com",
  messagingSenderId: "973213740323",
  appId: "1:973213740323:web:ffeab5b33e544b9b42f096",
  measurementId: "G-7HZ4R4VM5Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

getAnalytics(firebaseApp);

const db = getFirestore(firebaseApp);

connectFirestoreEmulator(db, "localhost", 8000);

export { db, firebaseApp };
