import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBm_cuY0tQI6ObAzwWZyvuUSaEX6sTgTs4",
  authDomain: "neuroforge-815e5.firebaseapp.com",
  projectId: "neuroforge-815e5",
  storageBucket: "neuroforge-815e5.firebasestorage.app",
  messagingSenderId: "101095135000",
  appId: "1:101095135000:web:b5068cfb8262dd9f8c306d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  // ================= LOGIN =================
  const loginForm = document.getElementById("login");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // 🚫 STOP REFRESH

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Login success 🔥");
        })
        .catch((error) => {
          alert(error.code);
          console.log(error);
        });
    });
  }

  // ================= SIGNUP =================
  const signupForm = document.getElementById("signup");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault(); // 🚫 STOP REFRESH

      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Signup success 🚀");
        })
        .catch((error) => {
          alert(error.code);
          console.log(error);
        });
    });
  }

});
