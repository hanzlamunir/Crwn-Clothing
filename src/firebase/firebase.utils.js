import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGcbiS4fzZes3OQy7ZSYBhV91JYK77uLQ",
  authDomain: "crwn-clothing-b2089.firebaseapp.com",
  projectId: "crwn-clothing-b2089",
  storageBucket: "crwn-clothing-b2089.appspot.com",
  messagingSenderId: "733242078097",
  appId: "1:733242078097:web:8732c7d6c500e3c5fe6030",
  measurementId: "G-8F9PY4190H",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc(`users/${userAuth.uid}`));

  // const userRef = firestore.doc(`users/${userAuth.uid}`);

  // const snapShot = await userRef.get();

  // console.log(snapShot);

  // if(!snapShot.exists) {
  //   const { displayName, email } = userAuth
  //   const createdAt = new Date()

  //   try {
  //     await userRef.set({
  //       displayName,
  //       email,
  //       createdAt,
  //       ...additionalData
  //     })
  //   } catch (error) {
  //     console.log('error creating user', error.message)
  //   }
  // }

  // return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
