import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxE5FiSctkj17HxlHh0Yc7kX5YEImZ35E",
  authDomain: "technogigwork.firebaseapp.com",
  projectId: "technogigwork",
  storageBucket: "technogigwork.firebasestorage.app",
  messagingSenderId: "90694708444",
  appId: "1:90694708444:web:ce4cf2e27b65978f835819",
  measurementId: "G-CVBHF6DCF4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
