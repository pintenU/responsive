
"use strict";

const primaryNavigation = document.getElementById("primary-navigation");
const btnHamburger = document.getElementById("hamburger-button");

if (btnHamburger && primaryNavigation) {
    btnHamburger.addEventListener("click", () => {
    primaryNavigation.classList.toggle("open");
    const expanded = btnHamburger.getAttribute("aria-expanded") === "true";
    btnHamburger.setAttribute("aria-expanded", expanded ? "false" : "true");
});
}