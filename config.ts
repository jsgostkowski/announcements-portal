// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlZuWrB2vDOTj_YottN5tKVlhUaPMiDr8",
  authDomain: "announcements-project-21bdf.firebaseapp.com",
  projectId: "announcements-project-21bdf",
  storageBucket: "announcements-project-21bdf.appspot.com",
  messagingSenderId: "999457991556",
  appId: "1:999457991556:web:68f7c1ed6b1f4f9c1a8bd1",
  measurementId: "G-MXE85Z7BPF",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
