import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// =======================
// Login Check
// =======================

const balance = document.getElementById("balance");
const greeting = document.getElementById("greeting");

onAuthStateChanged(auth, (user) => {

  if (!user) {
    location.href = "login.html";
    return;
  }

  if (balance) balance.innerText = "0.00";

});

// =======================
// Greeting
// =======================

const hour = new Date().getHours();

if (greeting) {

  if (hour < 12) {
    greeting.innerText = "🌞 Good Morning";
  } else if (hour < 18) {
    greeting.innerText = "☀️ Good Afternoon";
  } else {
    greeting.innerText = "🌙 Good Evening";
  }

}

// =======================
// Navigation
// =======================

window.openDeposit = function () {
  location.href = "deposit.html";
};

window.openWithdraw = function () {
  location.href = "withdraw.html";
};

window.openBuyGmail = function () {
  location.href = "gmail.html";
};

window.openMicroTask = function () {
  location.href = "task.html";
};

window.openJobPost = function () {
  location.href = "jobpost.html";
};

window.openReferral = function () {
  location.href = "referral.html";
};

window.openHistory = function () {
  location.href = "history.html";
};

window.openSupport = function () {
  location.href = "contact.html";
};

window.openProfile = function () {
  location.href = "profile.html";
};

window.openSettings = function () {
  location.href = "settings.html";
};

console.log("Dashboard Part 1 Loaded");// =======================
// Dashboard Statistics
// =======================

const totalEarn = document.getElementById("totalEarn");
const totalWithdraw = document.getElementById("totalWithdraw");
const referralCount = document.getElementById("referralCount");

if (totalEarn) totalEarn.innerText = "৳0";
if (totalWithdraw) totalWithdraw.innerText = "৳0";
if (referralCount) referralCount.innerText = "0";

// =======================
// Notification
// =======================

const bell = document.querySelector(".fa-bell");

if (bell) {
  bell.addEventListener("click", () => {
    alert("🔔 No new notifications");
  });
}

// =======================
// Refresh Balance
// =======================

function refreshBalance() {
  if (balance) {
    balance.innerText = "0.00";
  }
}

setInterval(refreshBalance, 30000);

// =======================
// Welcome Message
// =======================

window.addEventListener("load", () => {
  console.log("Welcome to TechnoGigWork");
});

// =======================
// Recent Activity
// =======================

const activities = [
  "✅ Welcome to TechnoGigWork",
  "💰 Balance Ready",
  "📋 Dashboard Loaded"
];

activities.forEach((item) => {
  console.log(item);
});

console.log("Dashboard Part 2 Loaded");// =======================
// Logout
// =======================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Logout Successful");
      location.href = "login.html";
    } catch (e) {
      alert(e.message);
    }
  });
}

// =======================
// Auto Update Greeting
// =======================

setInterval(() => {

  const h = new Date().getHours();

  if (!greeting) return;

  if (h < 12) {
    greeting.innerText = "🌞 Good Morning";
  } else if (h < 18) {
    greeting.innerText = "☀️ Good Afternoon";
  } else {
    greeting.innerText = "🌙 Good Evening";
  }

}, 60000);

// =======================
// Error Protection
// =======================

window.onerror = function () {
  console.log("Dashboard Error Protected");
  return true;
};

// =======================
// Dashboard Ready
// =======================

console.log("TechnoGigWork Dashboard Ready");
