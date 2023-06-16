import { deleteApp, getApp, getApps, initializeApp } from "firebase-admin/app";

const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.AUTHDOMAIN,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  appId: import.meta.env.APPID,
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(FIREBASE_CONFIG);
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp);
    firebaseApp = initializeApp(FIREBASE_CONFIG);
}