import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration - REPLACE WITH YOUR ACTUAL CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAfZDmsZf8doVY6gkWWTrcSbSScQrycRFU",
  authDomain: "subhalabh-pooja-services-1786a.firebaseapp.com",
  projectId: "subhalabh-pooja-services-1786a",
  storageBucket: "subhalabh-pooja-services-1786a.firebasestorage.app",
  messagingSenderId: "984038941882",
  appId: "1:984038941882:web:dca6aa85e1ca1bf7d00e83",
  measurementId: "G-1LMPCNK2J5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;
