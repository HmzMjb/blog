// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWN8A1iKaOim2HG7I2xZGrRwsbweI7z9A",
  authDomain: "hackathon-blog-site.firebaseapp.com",
  databaseURL: "https://hackathon-blog-site-default-rtdb.firebaseio.com",
  projectId: "hackathon-blog-site",
  storageBucket: "hackathon-blog-site.appspot.com",
  messagingSenderId: "290859748016",
  appId: "1:290859748016:web:803cdeeaf6209a57d7c975",
  measurementId: "G-NTERD3PF8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

const email = document.getElementById("email")
let password = document.getElementById("password")

window.signin = () => {
    let userObj = {
        email: email.value,
        password: password.value
    }
    signInWithEmailAndPassword(auth, userObj.email, userObj.password)
  .then((userCredential) => {
    alert("Signin successful")
    window.location.replace("../index.html")
  })
  .catch((error) => {
    alert(error)
  });
}
