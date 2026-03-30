// 🔥 Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyBm_cuY0tQI60bAzwWZyvuUSaEX6sTgTs4",
  authDomain: "neuroforge-815e5.firebaseapp.com",
  projectId: "neuroforge-815e5",
  storageBucket: "neuroforge-815e5.firebasestorage.app",
  messagingSenderId: "101095135000",
  appId: "1:101095135000:web:b5068cfb8262dd9f8c306d"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// =======================
// LOGIN
// =======================
const loginForm = document.getElementById("login");

if (loginForm) {
  loginForm.onsubmit = function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Login success 🔥"))
      .catch((error) => {
  alert(error.code);
  console.log(error);
});
  
}

// =======================
// SIGNUP
// =======================
const signupForm = document.getElementById("signup");
document.addEventListener("DOMContentLoaded", () => {

  // LOGIN FORM
  const loginForm = document.getElementById("login");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 STOP REFRESH

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Login:", email);

    // Firebase login here
  });


  // SIGNUP FORM
  const signupForm = document.getElementById("signup");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 STOP REFRESH

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    console.log("Signup:", name, email);

    // Firebase signup here
  });

});
if (signupForm) {
  signupForm.onsubmit = function(e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Signup success 🚀"))
      .catch(() => alert("Signup failed ❌"));
  };
}
