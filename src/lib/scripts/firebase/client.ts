/* import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import {app} from "$lib/scripts/stores/Firebase";
import {user} from "$lib/scripts/stores/User";

export const login = (email: string, password: string) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            console.log(`Code: ${errorCode} | Message: ${errorMessage}`)
        });
};

export const logout = async () => {
    const auth = getAuth(app);
    signOut(auth)
};

onAuthStateChanged(getAuth(), (_user) => {
    if(_user) {
        user.set(_user);
    } else {
        user.set(null);
    }
}) */

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  PUBLIC_FIREBASE_PROJECT_ID,
  PUBLIC_FIREBASE_API_KEY,
  PUBLIC_FIREBASE_AUTH_DOMAIN,
  PUBLIC_FIREBASE_STORAGE_BUCKET,
  PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  PUBLIC_FIREBASE_APP_ID,
} from "$env/static/public";

function makeApp() {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0]!;
  }

  return initializeApp({
    apiKey: PUBLIC_FIREBASE_API_KEY,
    authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: PUBLIC_FIREBASE_APP_ID,
    databaseURL: `https://${PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

export const firebase = makeApp();
export const auth = getAuth(firebase);
