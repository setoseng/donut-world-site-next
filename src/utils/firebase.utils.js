// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
  query,
  getDocs,
  writeBatch,
  collection,
} from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEaI_vp4Yaub20-1Pj4VRznRKQP9SpAf4",
  authDomain: "donut-world-site-next.firebaseapp.com",
  projectId: "donut-world-site-next",
  storageBucket: "donut-world-site-next.appspot.com",
  messagingSenderId: "518633014097",
  appId: "1:518633014097:web:3335057ec9a4dd8bf2c970",
  measurementId: "G-DTQMHY3SKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const db = getFirestore();

provider.setCustomParameters({
  prompt: "select_account"
});

// Util Function to add Data to Firebase
// Use Once to Add Collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  ) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.menuType.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done');
}

export const getMenuDataAndDocuments = async () => {
  const collectionRef = collection(db, 'menuData');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const menuDataMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { menuType, items } = docSnapshot.data();
    acc[menuType.toLowerCase()] = items;
    return acc;
  }, {})
  return menuDataMap;
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)
  
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName,  email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signOutUser = async () => await signOut(auth)
