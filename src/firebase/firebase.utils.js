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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth =firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;