import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.VUE_FIREBASE_KEY,
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

const database = firebase.database();

export { database };
