import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD-Kk-YZNwxeuz0ZlAh24Nvga65kE1ezhs",
  authDomain: "ifix-8eb62.firebaseapp.com",
  projectId: "ifix-8eb62",
  storageBucket: "ifix-8eb62.appspot.com",
  messagingSenderId: "814704177247",
  appId: "1:814704177247:web:7a9d981cb202cd9c776bea",
  measurementId: "G-8GNNZ2CFJ6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { app, firebaseAuth, db }
