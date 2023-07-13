
const offCanvasMenuClick = document.querySelector(".navbar-off-canvas-menu")
const offCanvasMenu = document.querySelector(".off-canvas-menu")
const menuOverly = document.querySelector(".menu-overly")


offCanvasMenuClick.addEventListener("click", function () {
    if (offCanvasMenu.classList.contains("hamburger-trigger", "menu-overly-add")) {
        offCanvasMenu.classList.remove("hamburger-trigger");
        menuOverly.classList.remove("menu-overly-add");
    } else {
        offCanvasMenu.classList.add("hamburger-trigger");
        menuOverly.classList.add("menu-overly-add");
    }
});

