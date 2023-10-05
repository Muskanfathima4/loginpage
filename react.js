const validUsername = "Login@gmail.com";
const validPassword = "12345678";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        message.textContent = "Login successful!";
        window.location.href = "redirect.html";
    
    } else {
        message.textContent = "Invalid username or password. Please try again.";
    }
});
