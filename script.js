// Mobile navigation menu
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
    });
});

// Update footer year automatically
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
