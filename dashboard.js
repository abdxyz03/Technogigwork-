import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const balance = document.getElementById("balance");

onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // User Name
  if (user.displayName) {
    userName.textContent = user.displayName;
  } else {
    userName.textContent = user.email.split("@")[0];
  }

  // User Email
  userEmail.textContent = user.email;

  // Demo Balance
  balance.textContent = "৳0.00";

});

// Logout
logoutBtn.addEventListener("click", async () => {

  try {

    await signOut(auth);

    alert("Logout Successful!");

    window.location.href = "login.html";

  } catch (error) {

    alert(error.message);

  }

});

// ===============================
// Navigation Functions
// ===============================

function openBuyGmail() {
  window.location.href = "buygmail.html";
}

function openMicroTask() {
  window.location.href = "task.html";
}

function openJobPost() {
  window.location.href = "jobpost.html";
}

function openWithdraw() {
  window.location.href = "withdraw.html";
}

function openReferral() {
  window.location.href = "referral.html";
    }// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {

  setTimeout(() => {
    console.log("Welcome to TechnoGigWork");
  }, 800);

});

// ===============================
// Notification Badge
// ===============================

const notificationCount = 3;

const notify = document.getElementById("notificationCount");

if (notify) {
  notify.innerText = notificationCount;
}

// ===============================
// Recent Activity (Demo)
// ===============================

const recentActivities = [

  "✅ Gmail Sell Completed",

  "📋 Micro Task Completed",

  "💼 New Job Posted",

  "👥 Referral Joined"

];

const activityBox = document.getElementById("activityList");

if (activityBox) {

  recentActivities.forEach((item) => {

    const div = document.createElement("div");

    div.className = "activity-item";

    div.innerText = item;

    activityBox.appendChild(div);

  });

}

// ===============================
// Profile Button
// ===============================

const profileBtn = document.getElementById("profileBtn");

if (profileBtn) {

  profileBtn.onclick = () => {

    window.location.href = "profile.html";

  };

}

// ===============================
// Support Button
// ===============================

const supportBtn = document.getElementById("supportBtn");

if (supportBtn) {

  supportBtn.onclick = () => {

    window.location.href = "support.html";

  };

}

// ===============================
// Refresh Balance (Demo)
// ===============================

function refreshBalance(){

  balance.innerText = "৳0.00";

}

setInterval(refreshBalance,30000);// ===============================
// Dashboard Widgets
// ===============================

const today = new Date();

const hour = today.getHours();

const greeting = document.getElementById("greeting");

if(greeting){

if(hour<12){

greeting.innerText="🌞 Good Morning";

}else if(hour<18){

greeting.innerText="☀️ Good Afternoon";

}else{

greeting.innerText="🌙 Good Evening";

}

}

// ===============================
// Demo Statistics
// ===============================

const stats={

gmailSold:0,

microTask:0,

jobCompleted:0,

referral:0

};

const gmail=document.getElementById("gmailCount");
const task=document.getElementById("taskCount");
const job=document.getElementById("jobCount");
const ref=document.getElementById("referralCount");

if(gmail) gmail.innerText=stats.gmailSold;
if(task) task.innerText=stats.microTask;
if(job) job.innerText=stats.jobCompleted;
if(ref) ref.innerText=stats.referral;

// ===============================
// Live Clock
// ===============================

const clock=document.getElementById("clock");

function updateClock(){

if(!clock) return;

const now=new Date();

clock.innerText=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// ===============================
// Dashboard Ready
// ===============================

console.log("TechnoGigWork Dashboard Loaded Successfully");
function openDeposit() {
  window.location.href = "deposit.html";
  }
function openDeposit() {
    window.location.href = "deposit.html";
}

function openWithdraw() {
    window.location.href = "withdraw.html";
}

function openBuyGmail() {
    window.location.href = "gmail.html";
}

function openMicroTask() {
    alert("Micro Task Coming Soon");
}

function openJobPost() {
    alert("Job Posts Coming Soon");
}

function openReferral() {
    window.location.href = "referral.html";
}

function openHistory() {
    alert("History Coming Soon");
}

function openSupport() {
    window.location.href = "contact.html";
}

function openProfile() {
    alert("Profile Coming Soon");
}

function openSettings() {
    alert("Settings Coming Soon");
}

window.openDeposit = openDeposit;
window.openWithdraw = openWithdraw;
window.openBuyGmail = openBuyGmail;
window.openMicroTask = openMicroTask;
window.openJobPost = openJobPost;
window.openReferral = openReferral;
window.openHistory = openHistory;
window.openSupport = openSupport;
window.openProfile = openProfile;
window.openSettings = openSettings;
