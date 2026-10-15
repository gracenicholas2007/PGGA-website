document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    // Check that the elements exist
    if (!menuButton || !nav) {
        console.log("Menu button or navigation not found.");
        return;
    }

    // Open and close mobile menu
    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");

    });


    // Close menu after clicking a navigation link
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

        });

    });

});