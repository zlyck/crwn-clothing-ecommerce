import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCclH3VzQtnGIpP2IuVz31oIOao6_C0QHQ",
    authDomain: "crwn-clothing-db-32cd2.firebaseapp.com",
    projectId: "crwn-clothing-db-32cd2",
    storageBucket: "crwn-clothing-db-32cd2.appspot.com",
    messagingSenderId: "11609399241",
    appId: "1:11609399241:web:9dbfc7202506bb8d289218",
    measurementId: "G-01K6DSEH3H"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
