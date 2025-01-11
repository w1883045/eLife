function toggleNav() {
    var nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}



//get button
let backToTopButton = document.getElementById('backToTop');

//show button when user scrolls down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};




//scroll to top when clicked
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("scrollPopup");

    if (popup) {
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }else {
        console.error("Popup element not found!");
    }
});





document.addEventListener("DOMContentLoaded", () => {
    const reportContent = document.getElementById("reportsContainer");

    //Fetch reports from localStorage
    const reports = JSON.parse(localStorage.getItem("reports")) || [];

    if (reports.length === 0) {
        //If no reports are available
        reportsContainer.innerHTML = "<p> No reports available yet. Be the first to write one!</p>";
    } else {
        //Display each report
        reports.forEach((report) => {
            const reportCard = document.createElement("div");
            reportCard.classList.add("report-card");

            reportCard.innerHTML = `
                <h3>${report.title}</h3>
                <p>${report.content}</p>
                <small>By: ${report.author}</small>
            `;
            
            reportsContainer.appendChild(reportCard);

        });
    }

});