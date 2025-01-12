document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    //handle form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameField.value;

        if (username && passwordField.value) {
            localStorage.setItem("loggedInUser", username);
            window.location.href = "/eLife/profile/profile.html";
        } else {
            alert("Invalid login credentials. Please Try Again.");
        }
    });

    //Toggle password visibility
    togglePassword.addEventListener("click", () => {
        const isPasswordHidden = passwordField.getAttribute("type") === "password";
        passwordField.setAttribute("type", isPasswordHidden ? "text" : "password");
        
        const icon = togglePassword.querySelector("i");
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
});

function toggleNav() {
    var nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}