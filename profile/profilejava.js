document.addEventListener("DOMContentLoaded", () => {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const reportForm = document.getElementById("reportForm");
    const reportTitle = document.getElementById("reportTitle");
    const reportContent = document.getElementById("reportContent");
    const logoutBtn = document.getElementById("logoutBtn");

    //Display the logged-in user name
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("You are not logged in! Redirecting to login page.");
        window.location.href = "/eLife/login/login.html";
    } else {
        usernameDisplay.textContent = loggedInUser;
    }

    //Handle report submission
    reportForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = reportTitle.value.trim();
        const content = reportContent.value.trim();

        if (title && content) {
            const reports = JSON.parse(localStorage.getItem("reports")) || [];
            reports.push({ author: loggedInUser, title, content });
            localStorage.setItem("reports", JSON.stringify(reports));

            alert("Report published successfully!");
            reportForm.reset();
        } else {
            alert("Please fill out all fields!")
        }
    });

    //Handle logout
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "/eLife/login/login.html";
    });
});