import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATAWmfxtRX0cUcusiOjktj3FA5KNrCJ38",
    authDomain: "video-platforms-56ef5.firebaseapp.com",
    projectId: "video-platforms-56ef5",
    storageBucket: "video-platforms-56ef5.firebasestorage.app",
    messagingSenderId: "925266756549",
    appId: "1:925266756549:web:63303e1dc5093e3df201ac",
    measurementId: "G-KFME94RHNE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
