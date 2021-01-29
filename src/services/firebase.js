import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDy86T-0IuuHzYbOxQJVKMrNgADVl9DP-U",
    authDomain: "recipe-finder-6cc1c.firebaseapp.com",
    projectId: "recipe-finder-6cc1c",
    storageBucket: "recipe-finder-6cc1c.appspot.com",
    messagingSenderId: "315837099320",
    appId: "1:315837099320:web:5a679af1befb69e76e25cd"
  };

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


function login() {
    return auth.signInWithPopup(googleProvider);
}

function logout() {
    return auth.signOut();
}

function loginWithEmailAndPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user + ' logged in.');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode + errorMessage);
      });
}

function createAccountWithEmail(email, password) {
    console.log('Creating Account. ');
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user + ' logged in.');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode + errorMessage);
    });
}

export {
    login,
    logout,
    auth,
    loginWithEmailAndPass,
    createAccountWithEmail
}