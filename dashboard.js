import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Login না থাকলে Login page-এ পাঠাবে
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
