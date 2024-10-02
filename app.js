const email = document.getElementById('email');
const password = document.getElementById('password');
const signUpBtn = document.getElementById('signup-btn');

const signUpButtonPressed = (e) => {
    e.preventDefault();
    
}

signUpBtn.addEventListener('click', signUpButtonPressed);