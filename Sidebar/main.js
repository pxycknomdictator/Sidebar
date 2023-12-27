// making Hamburger menu click able to open side-bar

const menu = document.querySelector("#open");
const side = document.querySelector("#side-bar");

menu.addEventListener("click", () => {
    side.style.display = "block";
});


// making Hamburger menu click able to close side-bar

const menuClose = document.querySelector("#close");
const sideClose = document.querySelector("#side-bar");

menuClose.addEventListener("click", () => {
    sideClose.style.display = "none";
});

