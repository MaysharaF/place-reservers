import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBSBnR6Vu29T1zb16spwDW1yclesjqq2Lo",
  authDomain: "place-reservers-3e7be.firebaseapp.com",
  projectId: "place-reservers-3e7be",
  storageBucket: "place-reservers-3e7be.appspot.com",
  messagingSenderId: "64761828129",
  appId: "1:64761828129:web:cb3b813410dacf79d4e460",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
