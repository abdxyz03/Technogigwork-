import { db } from "./firebase.js";

import {
  collection,
  query,
  where,
  getDocs
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const depositList = document.getElementById("depositList");

async function loadDeposits() {

  depositList.innerHTML = "<p>Loading...</p>";

  try {

    const q = query(
      collection(db, "deposits"),
      where("status", "==", "Pending")
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      depositList.innerHTML = "<p>No Pending Deposit Requests.</p>";
      return;
    }

    depositList.innerHTML = "";

    snapshot.forEach((doc) => {

      const data = doc.data();

      depositList.innerHTML += `
      <div class="request-card">
        <h3>💰 ৳${data.amount}</h3>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>TRX ID:</b> ${data.trxid}</p>
        <p><b>Status:</b> ${data.status}</p>
      </div>
      `;

    });

  } catch (error) {

    depositList.innerHTML = "<p>Error: " + error.message + "</p>";

  }

}

loadDeposits();
async function approveDeposit(id) {
  await updateDoc(doc(db, "deposits", id), {
    status: "Approved"
  });

  alert("Deposit Approved");
  loadDeposits();
}

async function rejectDeposit(id) {
  await updateDoc(doc(db, "deposits", id), {
    status: "Rejected"
  });

  alert("Deposit Rejected");
  loadDeposits();
}

window.approveDeposit = approveDeposit;
window.rejectDeposit = rejectDeposit;
