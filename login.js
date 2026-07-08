import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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
    window.location.href = "dashboard.html"; // তোমার ড্যাশবোর্ড ফাইলের নাম যদি dashboard.html হয়
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-credential":
        alert("❌ Email অথবা Password ভুল!");
        break;
      case "auth/user-not-found":
        alert("❌ User পাওয়া যায়নি!");
        break;
      case "auth/wrong-password":
        alert("❌ Password ভুল!");
        break;
      case "auth/invalid-email":
        alert("❌ Invalid Email!");
        break;
      default:
        alert(error.message);
    }
  }
});
