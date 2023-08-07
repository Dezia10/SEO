// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhs_jhBtIViFgEUCHUpui5qRVM1K-8DeM",
  authDomain: "seoproject-72c1c.firebaseapp.com",
  projectId: "seoproject-72c1c",
  storageBucket: "seoproject-72c1c.appspot.com",
  messagingSenderId: "636171992986",
  appId: "1:636171992986:web:76663e907bb13004b98423",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBhs_jhBtIViFgEUCHUpui5qRVM1K-8DeM",
//   authDomain: "seoproject-72c1c.firebaseapp.com",
//   projectId: "seoproject-72c1c",
//   storageBucket: "seoproject-72c1c.appspot.com",
//   messagingSenderId: "636171992986",
//   appId: "1:636171992986:web:76663e907bb13004b98423",
// };

// Initialize Firebase
// initializeApp(firebaseConfig);

// const db = getFirestore();

// const collectionRef = collection(db, "favorites");

// getDocs(collectionRef).then((snapshot) => {
//   console.log(snapshot);
// });

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const db = getFirestore(app);
export const storage = getStorage(app);

export { db };
