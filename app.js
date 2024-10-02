import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9ppt5vU-XhTu6FYaoWY60oaDAZmXF_-4",
    authDomain: "my-first-firebase-projec-a87d4.firebaseapp.com",
    projectId: "my-first-firebase-projec-a87d4",
    storageBucket: "my-first-firebase-projec-a87d4.appspot.com",
    messagingSenderId: "253620189390",
    appId: "1:253620189390:web:3b7f7e0c4bdff852e3f89f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth(app);

const email = document.getElementById('email');
const password = document.getElementById('password');
const signUpBtn = document.getElementById('signup-btn');

const signUpButtonPressed = async (e) => {
    e.preventDefault();
    try {
        const userCredentials = await createUserWithEmailAndPassword(
            auth, 
            email.value,
            password.value
        );
        console.log(userCredentials);
    } catch (error) {
        console.log(error.code);
    }
};

signUpBtn.addEventListener('click', signUpButtonPressed);
