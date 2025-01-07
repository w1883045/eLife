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

window.addEventListener("scroll", function () {
    const popup = this.document.getElementById("scrollPopup");
    const targetHeading = this.document.querySelector("h2");

    if (targetHeading) {
        const rect = targetHeading.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            popup.classList.add("show");
        } else {
            popup.classList.remove("show");
        }
    }
});