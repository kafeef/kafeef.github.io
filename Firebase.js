import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCPU6aB0BMPAC_mw4BLBu0naRkFdhl5ZpQ",
  authDomain: "avvaluhsaanavee.firebaseapp.com",
  projectId: "avvaluhsaanavee",
  storageBucket: "avvaluhsaanavee.firebasestorage.app",
  messagingSenderId: "274473127808",
  appId: "1:274473127808:web:ac21c010b28b57ca53fb65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (!user) window.location.href = './login';
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = './login';
  }).catch(err => alert(err.message));
});
