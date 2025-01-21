document.addEventListener("DOMContentLoaded", () => {
    //Form Elements
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");


    //Login Form Fields
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    //Signup Form Fields
    const signupUsernameField = document.getElementById("signupUsername");
    const signupEmailField = document.getElementById("signupEmail");
    const signupPasswordField = document.getElementById("signupPassword");
    const toggleSignupPassword = document.getElementById("toggleSignupPassword");

    //Toggle forms
    const showSignupLink = document.getElementById("showSignup");
    const showLoginLink = document.getElementById("showLogin");


    //handle Login form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameField.value;
        const password = passwordField.value;

        if (username && password) {
            localStorage.setItem("loggedInUser", username);
            window.location.href = "/eLife/profile/profile.html";
        } else {
            alert("Invalid login credentials. Please Try Again.");
        }
    });

    //Handle Signup form submission
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = signupUsernameField.value;
        const email = signupEmailField.value;
        const password = signupPasswordField.value;

        if (username && email && password) {
            //simulate signup validation
            alert("Account created successfully! Please log in.");
            signupForm.reset();
            toggleForms("login");
        } else {
            alert("Please fill in all fields to sign up.");
        }
    });


    //Toggle password visibility for Login form
    togglePassword.addEventListener("click", () => {
        togglePasswordVisibility(passwordField, togglePassword);
    });

    //Toggle password visibility for signup form
    toggleSignupPassword.addEventListener("click", () => {
        togglePasswordVisibility(signupPasswordField, toggleSignupPassword);
    });

    //Toggle between login and signup form
    showSignupLink.addEventListener("click", () => toggleForms("signup"));
    showLoginLink.addEventListener("click", () => toggleForms("login"));


    //Toggle navigation menu
    window.toggleNav = function () {
        const nav = document.getElementById("navbar");
        nav.classList.toggle("active");
    };

    //utility functions
    function toggleForms(formType) {
        if (formType === "signup") {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        } else {
            signupForm.style.display = "none";
            loginForm.style.display = "block";
        }
    }

    function togglePasswordVisibility(passwordInput, toggleButton) {
        const isPasswordHidden = passwordInput.getAttribute("type") === "password";
        passwordInput.setAttribute("type", isPasswordHidden ? "text" : "password");

        const icon = toggleButton.querySelector("i");
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    }
});


