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