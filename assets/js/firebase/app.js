
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "API_KEY_MOCK",
    authDomain: "AUTH_DOMAIN_MOCK",
    projectId: "PROJECT_ID_MOCK",
    storageBucket: "STORAGE_BUCKET_MOCK",
    messagingSenderId: "MESSAGING_SENDER_ID_MOCK",
    appId: "APP_ID_MOCK"
};
//Real values removed for security reasons

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app