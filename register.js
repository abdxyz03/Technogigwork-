// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAxE5FiSctkj17HxlHh0Yc7kX5YEImZ35E",
  authDomain: "technogigwork.firebaseapp.com",
  projectId: "technogigwork",
  storageBucket: "technogigwork.firebasestorage.app",
  messagingSenderId: "90694708444",
  appId: "1:90694708444:web:ce4cf2e27b65978f835819",
  measurementId: "G-CVBHF6DCF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register Form
const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration Successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
