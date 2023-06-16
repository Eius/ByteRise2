import { deleteApp, getApp, getApps, initializeApp } from "firebase-admin/app";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA6figQ8PNPJMBaRffMH6p6njtffeJu2K8",
  authDomain: "byterise-db.firebaseapp.com",
  projectId: "byterise-db",
  storageBucket: "byterise-db.appspot.com",
  messagingSenderId: "204219912404",
  appId: "1:204219912404:web:03472d25c0584ca898eb41",
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