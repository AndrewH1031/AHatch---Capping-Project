const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup-btn');

closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Closes the popup if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Add login and signup functionality here
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // login logic
});

signupBtn.addEventListener('click', () => {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    // signup logic
});

// Display the popup on page load
popup.style.display = 'block';
