import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "FILL_ME_IN",
  authDomain: "FILL_ME_IN",
  databaseURL: "FILL_ME_IN",
  projectId: "FILL_ME_IN",
  storageBucket: "FILL_ME_IN",
  messagingSenderId: "FILL_ME_IN",
  appId: "FILL_ME_IN",
  measurementId: "FILL_ME_IN"

});

const auth = firebase.auth();

export { auth };