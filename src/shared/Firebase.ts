import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCHMor2Ltgo6wxbcjYzoNpE055_v8DjI_U',
  authDomain: 'helipad-mvp-554db.firebaseapp.com',
  projectId: 'helipad-mvp-554db',
  storageBucket: 'helipad-mvp-554db.appspot.com',
  messagingSenderId: '168942988755',
  appId: '1:168942988755:web:79022a40ba6c2083da9326',
  measurementId: 'G-KF43Q4SY0Y',
});

const assetStore = firebase.app().firestore().collection('assets');
const userStore = firebase.app().firestore().collection('users');
const contactStore = firebase.app().firestore().collection('contact');
const inviteCodeStore = firebase.app().firestore().collection('inviteCode');
const storageRef = firebase.storage().ref();

export {
  firebase,
  assetStore,
  userStore,
  contactStore,
  inviteCodeStore,
  storageRef,
};
