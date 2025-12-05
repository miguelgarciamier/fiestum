import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

let app: FirebaseApp | null = null;

function getConfig() {
  const cfg = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "",
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "",
    databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL || "",
  };
  if (!cfg.apiKey) {
    throw new Error(
      "Firebase config missing: set EXPO_PUBLIC_FIREBASE_* env vars in apps/mobile/.env"
    );
  }
  return cfg;
}

function ensureApp() {
  if (!app) {
    app = initializeApp(getConfig());
  }
  return app;
}

export function getAuthInstance() {
  return getAuth(ensureApp());
}

export function getFirestoreInstance() {
  return getFirestore(ensureApp());
}

export function getDatabaseInstance() {
  return getDatabase(ensureApp());
}

export function getStorageInstance() {
  return getStorage(ensureApp());
}
