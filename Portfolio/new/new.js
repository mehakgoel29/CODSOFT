let mode = document.querySelector("#mode");
let currMode = "light";
let icon = document.getElementById('mode');
let logo = document.querySelector('.logo');
let navLinks = document.querySelectorAll('.nav a');


mode.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = " rgb(3, 1, 27)";
        document.querySelector("body").style.color = "white";
        iconColor(true);
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        iconColor(false);
    }
});

function iconColor(isDarkMode) {
    if (isDarkMode) {
        icon.style.color = 'rgb(233, 14, 79)';
        logo.style.color = 'white';
        navLinks.forEach(link => link.style.color = 'white');
    } else {
        icon.style.color = 'rgb(233, 14, 79)';
        logo.style.color = 'black';
        navLinks.forEach(link => link.style.color = 'black');
    }
}
