import { auth } from "./firebase.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// User Login আছে কিনা দেখবে
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
    }
});

// Logout Button
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    signOut(auth)
    .then(() => {
        alert("Logout Successful!");
        window.location.href = "login.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});
