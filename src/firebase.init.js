// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG7VZLfC8j_8rInVV8VyOEYKoc-MrhGSw",
  authDomain: "genius-car-services-cadfd.firebaseapp.com",
  projectId: "genius-car-services-cadfd",
  storageBucket: "genius-car-services-cadfd.appspot.com",
  messagingSenderId: "165058383846",
  appId: "1:165058383846:web:ead1655d847d25c3511027",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
