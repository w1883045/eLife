document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameField = document.getElementById("username");

    //handle form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameField.value;

        if (username) {
            localStorage.setItem("loggedInUser", username);

            window.location.href = "eLife/profile/profile.html";
        } else {
            alert("Invalid login credentials. Please Try Again.");
        }
    })
});

function toggleNav() {
    var nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}