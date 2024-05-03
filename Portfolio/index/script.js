let mode = document.querySelector("#mode");
let currMode = "light";
let icon = document.getElementById('mode');
let logo = document.querySelector('.logo');
let navLinks = document.querySelectorAll('.nav a');

mode.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
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



/*
const typingAnimationElement = document.getElementById('typing-animation');

// Create an array of typing text
const typingTexts = ['I am a passionate FrontEnd Developer...'];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
  // Loop through each character and add it to the element
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 100); // Decreased delay to speed up the typing animation
  }

  // Once the animation is complete, reset the text and start over
  setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
  }, text.length * 100); // Adjusted delay accordingly
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);
*/
