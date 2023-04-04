import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { env } from "../env/env";

/**
 * This module gets FireBase's information from the application's
 * environment and allows the application to communicate with
 * FireBase on Google Cloud
 */

interface FireBaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

// Next automatically looks for .env prefix files and application can easily get secrets stored in the environment
const fireBaseConfig: FireBaseConfig = {
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    projectId: env.FIREBASE_PROJECT_ID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.FIREBASE_APP_ID,
    measurementId: env.FIREBASE_MEASUREMENT_ID
};

// Initializes connection to application's FireBase system.
const firebase_app: FirebaseApp =
    getApps().length === 0 ? initializeApp(fireBaseConfig) : getApps()[0];

export default firebase_app;
