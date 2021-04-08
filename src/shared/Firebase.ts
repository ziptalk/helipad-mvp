import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
const app = firebase.initializeApp(
    {
          apiKey: "AIzaSyCHMor2Ltgo6wxbcjYzoNpE055_v8DjI_U",
          authDomain: "helipad-mvp-554db.firebaseapp.com",
          projectId: "helipad-mvp-554db",
          storageBucket: "helipad-mvp-554db.appspot.com",
          messagingSenderId: "168942988755",
          appId: "1:168942988755:web:79022a40ba6c2083da9326",
          measurementId: "G-KF43Q4SY0Y"
    }
);

const store = firebase.app().firestore().collection("assets");

export {firebase, store};