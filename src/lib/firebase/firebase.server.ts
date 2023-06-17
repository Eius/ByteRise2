import { deleteApp, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
import { FIREBASE_ADMIN_PRIVATE_KEY, FIREBASE_ADMIN_CLIENT_EMAIL, } from "$env/static/private";

const { credential } = pkg;
const cred = credential.cert({
    privateKey: FIREBASE_ADMIN_PRIVATE_KEY,
    clientEmail: FIREBASE_ADMIN_CLIENT_EMAIL,
    projectId: "byterise-db",
})

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp({
        credential: cred,
    });
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp);
    firebaseApp = initializeApp({
        credential: cred,
    });
}

export const db = getFirestore(firebaseApp);
