import firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp(
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

// firebase.initializeApp(
//     {
//         apiKey: "AIzaSyBVFAr_6d_n1MJehUvQ9ZvgRr-2JA4jLMs",
//         authDomain: "helipad-mvp.firebaseapp.com",
//         projectId: "helipad-mvp",
//         storageBucket: "helipad-mvp.appspot.com",
//         messagingSenderId: "238198528208",
//         appId: "1:238198528208:web:66f62e144715657104a6d5",
//         measurementId: "G-2MJTY29YZD"
//     }
// );

const assetStore = firebase.app().firestore().collection("assets");
const userStore = firebase.app().firestore().collection("users");
const contactStore = firebase.app().firestore().collection("contact");

export {firebase, assetStore, userStore, contactStore};