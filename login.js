import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxE5FiSctkj17HxlHh0Yc7kX5YEImZ35E",
  authDomain: "technogigwork.firebaseapp.com",
  projectId: "technogigwork",
  storageBucket: "technogigwork.firebasestorage.app",
  messagingSenderId: "90694708444",
  appId: "1:90694708444:web:ce4cf2e27b65978f835819"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
});
