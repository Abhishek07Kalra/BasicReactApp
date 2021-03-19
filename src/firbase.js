import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyCBVhzqkm7y8jNCZyGeAhB_KWr7f4Kuhhc",
  authDomain: "loginsignup-3cc57.firebaseapp.com",
  projectId: "loginsignup-3cc57",
  storageBucket: "loginsignup-3cc57.appspot.com",
  messagingSenderId: "918604516812",
  appId: "1:918604516812:web:c388461ec3518f590a6169"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  export default db;