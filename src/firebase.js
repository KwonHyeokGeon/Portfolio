import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAC93XECASfYTWAOK7-piqAaOT6vJaeUdg",
    authDomain: "portfolio-guestbook-49c72.firebaseapp.com",
    projectId: "portfolio-guestbook-49c72",
    storageBucket: "portfolio-guestbook-49c72.appspot.com",
    databaseURL: "https://portfolio-guestbook-49c72-default-rtdb.asia-southeast1.firebasedatabase.app",
    messagingSenderId: "509044325795",
    appId: "1:509044325795:web:ccc852e48612b596a46e16",
    measurementId: "G-1FE5SX84HG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const database = firebase.database();

export { auth, db, storage, database };
