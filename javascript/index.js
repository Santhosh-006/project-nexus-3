const bars = document.getElementById("bars")
const navlinks  = document.getElementById("navlinks")

function navbar(){
    if (navlinks.classList.contains("top-[-1000px]")) {
        navlinks.classList.remove("top-[-1000px]");
        navlinks.classList.add("top-[70px]");
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-x");
      } else {
        navlinks.classList.remove("top-[70px]");
        navlinks.classList.add("top-[-1000px]");
        bars.classList.remove("fa-x");
        bars.classList.add("fa-bars");
      }

}

// Firebase Authentication


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaE4UTOwEL7hgE2gWk-NdvxEKkrCU-nUA",
  authDomain: "techysoftwares-d7144.firebaseapp.com",
  projectId: "techysoftwares-d7144",
  storageBucket: "techysoftwares-d7144.appspot.com",
  messagingSenderId: "526816230930",
  appId: "1:526816230930:web:4813e6684c2804915822cb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

let submitBtn = document.getElementById("submitBtn");

async function AddDocument(e) {
  e.preventDefault(); 

  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  try {
    const ref = collection(db, name);

    await addDoc(ref, {
      Name: name,
      MailId: mail,
      Subject: subject,
      Message: message
    });

    alert("We'll respond to your message soon.");
  } catch (error) {
    alert("Error: " + error.message);
  }
}


submitBtn.addEventListener("click", AddDocument);

