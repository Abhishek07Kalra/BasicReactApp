import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBi3A5YhcFsIyfCG9iuOBprD1RYQZVFAuY",
    authDomain: "gfgfirestore.firebaseapp.com",
    projectId: "gfgfirestore",
    storageBucket: "gfgfirestore.appspot.com",
    messagingSenderId: "744866265074",
    appId: "1:744866265074:web:bf51a045b6f9afaf4f1d6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  export default db;