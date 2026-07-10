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
});async function submitDeposit() {

  const amount = document.getElementById("amount").value.trim();
  const trxid = document.getElementById("trxid").value.trim();

  if (!amount || !trxid) {
    alert("Amount এবং Transaction ID লিখুন");
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

window.submitDeposit = submitDeposit;<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>bKash Deposit</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="deposit-card">

<div class="deposit-header">
<h2>💳 bKash Deposit</h2>
<p>Minimum Deposit: ৳100</p>
</div>

<div class="number-box">
<p>Send Money To</p>
<h1>01742356628</h1>
</div>

<input type="text" id="amount" placeholder="Enter Deposit Amount">

<input type="text" id="trxid" placeholder="Enter Transaction ID">

<button onclick="submitDeposit()">
Submit Deposit
</button>

<p class="note">
After sending money from bKash, enter the amount and Transaction ID, then submit your request.
</p>

</div>

<script>
function submitDeposit(){

const amount=document.getElementById("amount").value.trim();
const trx=document.getElementById("trxid").value.trim();

if(amount==="" || trx===""){
alert("Please enter amount and Transaction ID.");
return;
}

alert("Your deposit request has been submitted successfully!");

document.getElementById("amount").value="";
document.getElementById("trxid").value="";

}
</script>

</body>
</html>
