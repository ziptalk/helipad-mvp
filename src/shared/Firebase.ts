import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBVFAr_6d_n1MJehUvQ9ZvgRr-2JA4jLMs",
        authDomain: "helipad-mvp.firebaseapp.com",
        projectId: "helipad-mvp",
        storageBucket: "helipad-mvp.appspot.com",
        messagingSenderId: "238198528208",
        appId: "1:238198528208:web:66f62e144715657104a6d5",
        measurementId: "G-2MJTY29YZD"
    }
);

const store = firebase.app().firestore().collection("assets");

export {firebase, store};