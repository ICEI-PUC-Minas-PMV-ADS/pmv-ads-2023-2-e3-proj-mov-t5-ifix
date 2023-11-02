import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


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
export const app = initializeApp(firebaseConfig);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
