import { db, auth } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

let currentUser = null;

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  currentUser = user;
});

async function submitDeposit() {

  const amount = document.getElementById("amount").value.trim();
  const trxid = document.getElementById("trxid").value.trim();

  if (!amount || !trxid) {
    alert("Please enter Amount and Transaction ID.");
    return;
  }

  try {

    await addDoc(collection(db, "deposits"), {
      uid: currentUser.uid,
      email: currentUser.email,
      amount: Number(amount),
      trxid: trxid,
      status: "Pending",
      createdAt: serverTimestamp()
    });

    alert("✅ Deposit Request Submitted Successfully!");

    document.getElementById("amount").value = "";
    document.getElementById("trxid").value = "";

  } catch (error) {
    alert(error.message);
  }

}

window.submitDeposit = submitDeposit;
