import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAITr234ldAY89GedBYLw99VUIbXxlQ3ns",
    authDomain: "crwn-db-70d7e.firebaseapp.com",
    databaseURL: "https://crwn-db-70d7e.firebaseio.com",
    projectId: "crwn-db-70d7e",
    storageBucket: "crwn-db-70d7e.appspot.com",
    messagingSenderId: "148397088811",
    appId: "1:148397088811:web:449bd894d8803fdb880a6e",
    measurementId: "G-W745MKYWTR"
}

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;