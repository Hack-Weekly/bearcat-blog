import { initializeApp, getApps, FirebaseApp } from "firebase/app";

/**
 * This module gets FireBase's information from the application's
 * environment and allows the application to communicate with
 * FireBase on Google Cloud
 */

interface FireBaseConfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string,
}

// Next automatically looks for .env prefix files and application can easily get secrets stored in the environment
const fireBaseConfig: FireBaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// Initializes connection to application's FireBase system.
const firebase_app: FirebaseApp = getApps().length === 0 ? initializeApp(fireBaseConfig) : getApps()[0];

export default firebase_app;