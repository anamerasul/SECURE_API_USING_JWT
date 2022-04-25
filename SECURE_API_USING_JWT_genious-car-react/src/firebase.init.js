// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyA-uoD3hnZcOYh72bGHVQ5mOtMHSED75uY",
  // authDomain: "api-jwt-genious-car-react.firebaseapp.com",
  // projectId: "api-jwt-genious-car-react",
  // storageBucket: "api-jwt-genious-car-react.appspot.com",
  // messagingSenderId: "927697867539",
  // appId: "1:927697867539:web:98537c0d6a275aeaa8c0e6",
  // measurementId: "G-KJY1F4458C"


  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const myapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(myapp);


const app = { myapp, analytics }

const auth = getAuth(app.myapp)

export default auth