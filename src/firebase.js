// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as authorize from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBZcrb_nBtzB05tVX1Wj5ws_FVFfiTkaU",
    authDomain: "whatsapp-clone-va.firebaseapp.com",
    projectId: "whatsapp-clone-va",
    storageBucket: "whatsapp-clone-va.appspot.com",
    messagingSenderId: "436592806999",
    appId: "1:436592806999:web:5a07b66e1ac667cfd9e712",
    measurementId: "G-ZT45WT77PW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = authorize.getAuth(app);
const provider = new authorize.GoogleAuthProvider();

export { auth, provider };
export default db;