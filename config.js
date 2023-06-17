import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAb4LUXYeSwCiPxqOuYpIxPbEz1kNQ9dXk",
    authDomain: "elibraryapp-28c5d.firebaseapp.com",
    projectId: "elibraryapp-28c5d",
    storageBucket: "elibraryapp-28c5d.appspot.com",
    messagingSenderId: "1032446010000",
    appId: "1:1032446010000:web:0f7c7e8a3c3d360c482e15"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


