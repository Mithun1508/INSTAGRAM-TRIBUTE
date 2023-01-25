import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyANOCngIhcej14Ch9rAhxicYYRV9YihHl4",
  authDomain: "instgram-tribute.firebaseapp.com",
  projectId: "instgram-tribute",
  storageBucket: "instgram-tribute.appspot.com",
  messagingSenderId: "179132854133",
  appId: "1:179132854133:web:9a6554d95403f474726d3c",
  measurementId: "G-8P8TJPJEEP"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };