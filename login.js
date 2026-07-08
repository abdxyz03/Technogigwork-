import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value.trim();
  const password = form.querySelector('input[type="password"]').value;

  if (!email || !password) {
    alert("Please enter email and password!");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("✅ Login Successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});
